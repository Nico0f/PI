const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Op, Videogame, Genre } = require("../db.js");
const axios = require('axios');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//agrego aca abajo

router.get("/videogame", async (req, res) => {

  // "https://api.rawg.io/api/games?key=a0a928bd1bc7405381049cd878fad844&page_size=40"
  
  
  for (let i = 1; i<4; i++) {
    
    let apiData = await axios.get(`https://api.rawg.io/api/games?key=a0a928bd1bc7405381049cd878fad844&page=${i}&page_size=40`)
      .then(response => response)
      
    apiData.data.results.map( element => {
      const {name, released, background_image} = element
      Videogame.create({
        name,
        description: name,
        release_date: released,
        img: background_image
      })
        
    })
  }
  // agrego genres
  // let apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=a0a928bd1bc7405381049cd878fad844`)
  //       .then(response => response)
        
  //   apiGenres.data.results.map( element => {
  //   const {name} = element
  //   Genre.create({
  //     genre_name: name
  //   })
          
  //   })

  // agrego genres ^

  res.send( "got em")
})

router.get("/videogames", async (req, res) => {

  const {name} = req.query

  let games = await Videogame.findAll()

  if(!games.length) {
    for (let i = 1; i<4; i++) {
    
      let apiData = await axios.get(`https://api.rawg.io/api/games?key=a0a928bd1bc7405381049cd878fad844&page=${i}&page_size=40`)
        .then(response => response.data.results)
        .then(data => data.map(element => {
          const {name, released, background_image} = element
          Videogame.create({
          name,
          description: name,
          release_date: released,
          img: background_image
        })
        }))
        .catch(error => console.log(error))
        
      // apiData.data.results.map( element => {
      //   const {name, released, background_image} = element
      //   Videogame.create({
      //     name,
      //     description: name,
      //     release_date: released,
      //     img: background_image
      //   })
          
      // })
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

// router.get("/genres", async (req, res) => {

//   let genresDb = await Genre.findAll();
//   if (genresDb.length) {
//     res.json( genresDb )
//   } else {
//     let apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=a0a928bd1bc7405381049cd878fad844`)
//         .then(response => response)
        
//     apiGenres.data.results.map( element => {
//     const {name} = element
//     Genre.create({
//       genre_name: name
//     })
          
//     });
//   genresDb = await Genre.findAll();
//   res.json( genresDb )
//   }
//   res.json( genresDb )
// })


router.get("/genres", async (req, res) => {

  let genresDb = await Genre.findAll();
  if (genresDb.length) {
    console.log("desde db")
    res.status(202).send( genresDb )
  } else {
    axios.get(`https://api.rawg.io/api/genres?key=a0a928bd1bc7405381049cd878fad844`)
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

// router.get("/videogames")


// Únicos Endpoints/Flags que pueden utilizar
// GET https://api.rawg.io/api/games
// GET https://api.rawg.io/api/games?search={game}
// GET https://api.rawg.io/api/genres
// GET https://api.rawg.io/api/games/{id}







router.post("/videogames", async (req, res) => {
  const {name, description, release_date, rating, platforms} = req.body
    const videoGame = await Videogame.create({
        name,
        description,
        release_date,
        rating,
        platforms
      });
      res.status(201).json(videoGame);
})

router.get('/', (req, res) => {   // agregue esto
  res.send('Home PI');    // agregue esto
});   // agregue esto


//agrego aca arriba

module.exports = router;
