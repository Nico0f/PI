require("dotenv").config();
const { API_KEY } = process.env;
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const express = require("express");
const { Op, Videogame, Genre } = require("../db.js");
const axios = require('axios');

const router = Router();

router.use(express.json());

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//agrego aca abajo

router.get("/videogames", async (req, res) => {

  const {name} = req.query

  let games = await Videogame.findAll()

  if(!games.length) {
    for (let i = 1; i<4; i++) {
    
      let apiData = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}&page_size=40`)
        .then(response => response.data.results)
        .then(data => data.map(element => {
          const {name, released, background_image, rating_top, rating} = element
          const platforms = []
          element.platforms.forEach(e => platforms.push(e.platform.name))
          Videogame.create({
          name,
          description: name,
          release_date: released,
          img: background_image,
          rating_int: rating_top,
          rating_float: rating,
          platforms
        })
        }))
        .catch(error => console.log(error))
    }
    res.status(201).send("gotem")
  } else {

    if (!name) {
      let videogames = await Videogame.findAll();
      res.status(200).json( videogames )
    } else {
      
      const result = await Videogame.findAll(
        {where: {
          name: {
            [Op.iLike]: `%${name}%`
        }
        }
      })
      
      await ((result.length > 0) ? res.json( result ) : res.send( "nope" ))
    }


  }



})


router.get("/videogame/:gameId", async (req, res) => {
  const {gameId} = req.params
  
  const result = await Videogame.findAll(
    {where: {
      id: gameId
    }}
    )
    if (result.length) {
      res.json( result )

    } else {
      res.send("no existe")
      
    }
  }

)

router.get("/genres", async (req, res) => {

  let genresDb = await Genre.findAll();
  if (genresDb.length) {
    console.log("desde db")
    res.status(202).send( genresDb )
  } else {
    axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        .then(response => response.data)
        .then(data => data.results.map(element =>
        {const {name} = element
        let games = element.games.map(e => e.name);
          Genre.create({
            genre_name: name,
            games: games
          })
          return element}
          ))
        .then(genresArray => res.json(genresArray))
  }
})






router.post("/videogames", async (req, res) => {
  const {name, description, img, releaseDate, rating, platforms} = req.body
    
  try {
    const videoGame = await Videogame.create({
          name,
          description,
          release_date: releaseDate,
          img,
          rating_int: rating,
          platforms,
          FormCreated: true
        });
        res.status(201).json(videoGame);

  } catch {
    res.send("Error when creating videogame")
  }
})

router.get('/', (req, res) => {
  res.send('Home PI');
});




module.exports = router;
