import React from "react";
import Card from "./Card"
import store from "../store/store";
import "./Cards.css"



import {changeView} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function Cards(props) {

    const typeView = useSelector(state => state.typeView)
    const search = useSelector(state => state.search)
    const genre = useSelector(state => state.genre)
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch()
    const games = useSelector(state => state.games)


    const [cardsState, setCardsState] = React.useState({index: 0, genres: [], genre: "Indie"})

    // React.useEffect(() => {

    //   setCardsState((prevState) => ({...prevState, genres: props.props.genres}))

    // }, [])



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
      
      function ratingasc( a, b ) {
        if ( a.rating_float < b.rating_float ){
          return -1;
        }
        if ( a.rating_float > b.rating_float ){
          return 1;
        }
        return 0;
      }

      function ratingdesc( a, b ) {
        if ( a.rating_float > b.rating_float ){
          return -1;
        }
        if ( a.rating_float < b.rating_float ){
          return 1;
        }
        return 0;
      }
      // let data = props.props.games
      
      // console.log(s)
      let displayArray = []
      // console.log(games)
      
  switch (typeView) {
    case "desc":
      displayArray = games.sort(desc).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>)
      break;
    case "asc":
      displayArray = games.sort(asc).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>)
      break;
    case "ratingdesc":
      displayArray = games.sort(ratingdesc).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>)
      break;
    case "ratingasc":
      displayArray = games.sort(ratingasc).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>)
      break;
    case "search":
      displayArray = search.sort(asc).filter((e, i) => i < 14).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>);
      break;
    case "api":
      displayArray = games.filter(e => e.FormCreated === true).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>);
      break;
    case "db":
      displayArray = games.filter(e => e.FormCreated === false).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>);
      break;
    case "genre":
      if (genre === "") {
        dispatch(changeView(""))
        break;
      } else {
        let genreGames = genres.filter(e => e.genre_name === genre)
        let datas = games.filter(e => genreGames[0].games.includes(e.name))
        displayArray = datas.map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>);
        break;
      }
    default:
      displayArray = games.map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} id={e.id}/>);
      break;
  }
      

      
  
  
  
  const pag = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]
  
  let arr = pag.map(el => el+(15*(cardsState.index)))
  const displayp = displayArray.filter((e,i) => arr.includes(i))
    
  // const cardpagasc = cardsasc.filter((e,i) => arr.includes(i))
  
  const paginas = Math.ceil((displayArray.length/15))
  const paginado = []
  const botones = () => {
    for (let i=0; i<paginas; i++) {
      paginado.push(<button type="button" className="buttonIndex" key={i} onClick={() => setCardsState((prevState) => ({...prevState, index:`${i}`}))}>{i+1}</button>)
    }
    
  }
  function pageBack() {
    if (cardsState.index > 0) {
      setCardsState((prevState) => ({...prevState, index: prevState.index--}))
    }
  }

  function pageFordward() {
    if (cardsState.index < paginas-1) {
      setCardsState((prevState) => ({...prevState, index: prevState.index++}))
    }
  }
  botones()
    return (
        <div>
            <div>
              <button onClick={() => console.log(cardsState.index)}></button>
                {paginado.length > 1 ? ([<button type="button" key="back" className="buttonIndex" onClick={pageBack}>🢠</button>, paginado, <button type="button" key="last" className="buttonIndex" onClick={pageFordward}>🢡</button>]) : (cardsState.index === 0) ? <></> : setCardsState((prevState) => ({...prevState, index:0}))}
            </div>
            {displayp}
            <p>type of view</p>
            {/* <button type="button" onClick={() => setCardsState((prevState) => ({...prevState, typeView:"asc"}))}>asc</button> */}
        </div>
    )
}

{/* <button type="button" key="in" onClick={() => setCardsState((prevState) => ({...prevState, index: 1}))}><</button> */}