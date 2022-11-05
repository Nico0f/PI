import React from "react";
import Card from "./Card"
import store from "./store";

export default function Cards(props) {

    // const [index, setIndex] = React.useState(1)

    const [cardsState, setCardsState] = React.useState({index: 1, typeView:"desc"})

    // setGenres(props.props.genres)

    function asc( a, b ) {
        if ( a.name < b.name ){
          return -1;
        }
        if ( a.name > b.name ){
          return 1;
        }
        return 0;
      }


      function desc( a, b ) {
        if ( a.name > b.name ){
          return -1;
        }
        if ( a.name < b.name ){
          return 1;
        }
        return 0;
      }



    const data = props.props.games

    const genree = [
        {
          "id": 1,
          "genre_name": "Action",
          "games": [
            "Grand Theft Auto V",
            "The Witcher 3: Wild Hunt",
            "Tomb Raider (2013)",
            "Counter-Strike: Global Offensive",
            "The Elder Scrolls V: Skyrim",
            "Left 4 Dead 2"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 2,
          "genre_name": "Indie",
          "games": [
            "Limbo",
            "Rocket League",
            "Terraria",
            "Hotline Miami",
            "Hollow Knight",
            "Outlast"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 3,
          "genre_name": "Adventure",
          "games": [
            "Grand Theft Auto V",
            "The Witcher 3: Wild Hunt",
            "Tomb Raider (2013)",
            "Portal",
            "Life is Strange",
            "Red Dead Redemption 2"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 4,
          "genre_name": "RPG",
          "games": [
            "The Witcher 3: Wild Hunt",
            "The Elder Scrolls V: Skyrim",
            "Borderlands 2",
            "Fallout 4",
            "God of War",
            "Horizon Zero Dawn"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 5,
          "genre_name": "Strategy",
          "games": [
            "Sid Meier's Civilization V",
            "Company of Heroes 2",
            "XCOM: Enemy Unknown",
            "Brutal Legend",
            "Cities: Skylines",
            "ARK: Survival Of The Fittest"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 6,
          "genre_name": "Shooter",
          "games": [
            "Portal 2",
            "Counter-Strike: Global Offensive",
            "Left 4 Dead 2",
            "BioShock Infinite",
            "Borderlands 2",
            "Half-Life 2"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 7,
          "genre_name": "Casual",
          "games": [
            "Garry's Mod",
            "Fall Guys: Ultimate Knockout",
            "Brawlhalla",
            "Among Us",
            "Goat Simulator",
            "A Story About My Uncle"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 8,
          "genre_name": "Simulation",
          "games": [
            "Hitman",
            "Garry's Mod",
            "Stardew Valley",
            "Company of Heroes 2",
            "Don't Starve Together",
            "Cities: Skylines"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 9,
          "genre_name": "Puzzle",
          "games": [
            "Portal 2",
            "Portal",
            "Limbo",
            "Half-Life 2: Episode Two",
            "Half-Life",
            "INSIDE"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 10,
          "genre_name": "Arcade",
          "games": [
            "Hotline Miami",
            "Injustice: Gods Among Us Ultimate Edition",
            "Minecraft",
            "GRID 2",
            "Hotline Miami 2: Wrong Number",
            "A Story About My Uncle"
          ],
          "createdAt": "2022-11-05T07:00:34.244Z",
          "updatedAt": "2022-11-05T07:00:34.244Z"
        },
        {
          "id": 11,
          "genre_name": "Platformer",
          "games": [
            "Limbo",
            "Terraria",
            "Hollow Knight",
            "Little Nightmares",
            "Half-Life",
            "Super Meat Boy"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 12,
          "genre_name": "Racing",
          "games": [
            "Rocket League",
            "GRID 2",
            "DiRT Rally",
            "Forza Horizon 4",
            "Race Driver: Grid",
            "DiRT Showdown"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 13,
          "genre_name": "Massively Multiplayer",
          "games": [
            "Destiny 2",
            "Dota 2",
            "Warframe",
            "Apex Legends",
            "Path of Exile",
            "For Honor"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 14,
          "genre_name": "Sports",
          "games": [
            "Rocket League",
            "Fall Guys: Ultimate Knockout",
            "DiRT Rally",
            "Jet Set Radio",
            "VRChat",
            "Steep"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 15,
          "genre_name": "Fighting",
          "games": [
            "Injustice: Gods Among Us Ultimate Edition",
            "Mortal Kombat X",
            "SEGA Mega Drive and Genesis Classics",
            "Brawlhalla",
            "Mortal Kombat 11",
            "Yakuza Kiwami"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 16,
          "genre_name": "Family",
          "games": [
            "Journey",
            "LEGO The Lord of the Rings",
            "Broken Age",
            "LEGO The Hobbit",
            "Machinarium",
            "World of Goo"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 17,
          "genre_name": "Board Games",
          "games": [
            "Gwent: The Witcher Card Game",
            "Dota Underlords",
            "AdVenture Capitalist",
            "Poker Night 2",
            "Armello",
            "Hue"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 18,
          "genre_name": "Educational",
          "games": [
            "Papers, Please",
            "World of Goo",
            "Surgeon Simulator",
            "GameGuru",
            "Sid Meier's Civilization IV: Colonization",
            "Sid Meier's Pirates!"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 19,
          "genre_name": "Card",
          "games": [
            "Gwent: The Witcher Card Game",
            "Slay the Spire",
            "Poker Night at the Inventory",
            "Faeria",
            "Poker Night 2",
            "The Elder Scrolls: Legends"
          ],
          "createdAt": "2022-11-05T07:00:34.245Z",
          "updatedAt": "2022-11-05T07:00:34.245Z"
        },
        {
          "id": 20,
          "genre_name": "Action",
          "games": [
            "Grand Theft Auto V",
            "The Witcher 3: Wild Hunt",
            "Tomb Raider (2013)",
            "Counter-Strike: Global Offensive",
            "The Elder Scrolls V: Skyrim",
            "Left 4 Dead 2"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 21,
          "genre_name": "Indie",
          "games": [
            "Limbo",
            "Rocket League",
            "Terraria",
            "Hotline Miami",
            "Hollow Knight",
            "Outlast"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 22,
          "genre_name": "Adventure",
          "games": [
            "Grand Theft Auto V",
            "The Witcher 3: Wild Hunt",
            "Tomb Raider (2013)",
            "Portal",
            "Life is Strange",
            "Red Dead Redemption 2"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 23,
          "genre_name": "RPG",
          "games": [
            "The Witcher 3: Wild Hunt",
            "The Elder Scrolls V: Skyrim",
            "Borderlands 2",
            "Fallout 4",
            "God of War",
            "Horizon Zero Dawn"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 24,
          "genre_name": "Strategy",
          "games": [
            "Sid Meier's Civilization V",
            "Company of Heroes 2",
            "XCOM: Enemy Unknown",
            "Brutal Legend",
            "Cities: Skylines",
            "ARK: Survival Of The Fittest"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 25,
          "genre_name": "Shooter",
          "games": [
            "Portal 2",
            "Counter-Strike: Global Offensive",
            "Left 4 Dead 2",
            "BioShock Infinite",
            "Borderlands 2",
            "Half-Life 2"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 26,
          "genre_name": "Casual",
          "games": [
            "Garry's Mod",
            "Fall Guys: Ultimate Knockout",
            "Brawlhalla",
            "Among Us",
            "Goat Simulator",
            "A Story About My Uncle"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 27,
          "genre_name": "Simulation",
          "games": [
            "Hitman",
            "Garry's Mod",
            "Stardew Valley",
            "Company of Heroes 2",
            "Don't Starve Together",
            "Cities: Skylines"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 28,
          "genre_name": "Puzzle",
          "games": [
            "Portal 2",
            "Portal",
            "Limbo",
            "Half-Life 2: Episode Two",
            "Half-Life",
            "INSIDE"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 29,
          "genre_name": "Arcade",
          "games": [
            "Hotline Miami",
            "Injustice: Gods Among Us Ultimate Edition",
            "Minecraft",
            "GRID 2",
            "Hotline Miami 2: Wrong Number",
            "A Story About My Uncle"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 30,
          "genre_name": "Platformer",
          "games": [
            "Limbo",
            "Terraria",
            "Hollow Knight",
            "Little Nightmares",
            "Half-Life",
            "Super Meat Boy"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 31,
          "genre_name": "Racing",
          "games": [
            "Rocket League",
            "GRID 2",
            "DiRT Rally",
            "Forza Horizon 4",
            "Race Driver: Grid",
            "DiRT Showdown"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 32,
          "genre_name": "Massively Multiplayer",
          "games": [
            "Destiny 2",
            "Dota 2",
            "Warframe",
            "Apex Legends",
            "Path of Exile",
            "For Honor"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 33,
          "genre_name": "Sports",
          "games": [
            "Rocket League",
            "Fall Guys: Ultimate Knockout",
            "DiRT Rally",
            "Jet Set Radio",
            "VRChat",
            "Steep"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 34,
          "genre_name": "Fighting",
          "games": [
            "Injustice: Gods Among Us Ultimate Edition",
            "Mortal Kombat X",
            "SEGA Mega Drive and Genesis Classics",
            "Brawlhalla",
            "Mortal Kombat 11",
            "Yakuza Kiwami"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 35,
          "genre_name": "Family",
          "games": [
            "Journey",
            "LEGO The Lord of the Rings",
            "Broken Age",
            "LEGO The Hobbit",
            "Machinarium",
            "World of Goo"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 36,
          "genre_name": "Board Games",
          "games": [
            "Gwent: The Witcher Card Game",
            "Dota Underlords",
            "AdVenture Capitalist",
            "Poker Night 2",
            "Armello",
            "Hue"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 37,
          "genre_name": "Educational",
          "games": [
            "Papers, Please",
            "World of Goo",
            "Surgeon Simulator",
            "GameGuru",
            "Sid Meier's Civilization IV: Colonization",
            "Sid Meier's Pirates!"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        },
        {
          "id": 38,
          "genre_name": "Card",
          "games": [
            "Gwent: The Witcher Card Game",
            "Slay the Spire",
            "Poker Night at the Inventory",
            "Faeria",
            "Poker Night 2",
            "The Elder Scrolls: Legends"
          ],
          "createdAt": "2022-11-05T07:00:35.293Z",
          "updatedAt": "2022-11-05T07:00:35.293Z"
        }
      ]

      console.log(genree[2].games)


    const pag = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

    const arr = pag.map(el => el+(cardsState.index===1 ? 0 : 15*cardsState.index))

    const cardsfilled = data.map(e => <Card name={e.name} img={e.img} key={e.id}/>)

    const cardsasc = data.sort(asc).map(e => <Card name={e.name} img={e.img} key={e.id}/>)

    const cardsdesc = data.sort(desc).map(e => <Card name={e.name} img={e.img} key={e.id}/>)

    // const genree = props.props.genres[2].games
    // const ss = []
    // const cardsgenre = data.forEach(function(e) {
    //     if (genree[2].games.includes(e.name)) {
    //         ss.push(e)
    //     }})
    //     const ger = ss.map(e => <Card name={e.name} img={e.img} key={e.id}/>)

    const cardpagdesc = cardsdesc.filter((e,i) => arr.includes(i))
    const cardpagasc = cardsasc.filter((e,i) => arr.includes(i))


    const paginas = Math.ceil((cardsfilled.length/15)-1)
    const paginado = []
    const botones = () => {
        for (let i=1; i<=paginas; i++) {
            paginado.push(<button type="button" key={i} onClick={() => setCardsState((prevState) => ({...prevState, index:`${i}`}))}>{i}</button>)
        }
        
    }
    botones()
    return (
        <div>
            {cardsState.typeView === "desc" ? cardpagdesc : cardpagasc}
            <div>
                {paginado}
            </div>
            <p>type of view</p>
            <button type="button" onClick={() => setCardsState((prevState) => ({...prevState, typeView:"asc"}))}>asc</button>
        </div>
    )
}