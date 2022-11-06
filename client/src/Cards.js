import React from "react";
import Card from "./Card"
import store from "./store";



import {changeView} from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function Cards(props) {

    // const [index, setIndex] = React.useState(1)

    // const [cardsState, setCardsState] = React.useState({index: 1, typeView:"default", genres: [], genre: "Indie"})
    const [cardsState, setCardsState] = React.useState({index: 0, genres: [], genre: "Indie"})

    React.useEffect(() => {

      setCardsState((prevState) => ({...prevState, genres: props.props.genres}))

    }, [])



    const typeView = useSelector(state => state.typeView)
    const search = useSelector(state => state.search)
    const dispatch = useDispatch()




    // setCardsState((prevState) => ({...prevState, genres:`${i}`}))

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

      let data = props.props.games
      
      
      let displayArray = []
      // console.log(cardsState.genres)
      
      switch (typeView) {
    case "desc":
      displayArray = data.sort(desc).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} />)
      break;
    case "asc":
      displayArray = data.sort(asc).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} />)
      break;
    case "search":
      displayArray = search.sort(asc).filter((e,i) => i < 14).map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} />);
      break;
      case "genre":
      if (props.props.genre === "") {
        dispatch(changeView(""))
        break;
      } else {
        let genreGames = cardsState.genres.filter(e => e.genre_name === props.props.genre)
        let datas = data.filter(e => genreGames[0].games.includes(e.name))
        displayArray = datas.map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} />);
        break;
      }
      default:
        displayArray = data.map(e => <Card name={e.name} img={e.img} rating={e.rating_int} rating_float={e.rating_float} platforms={e.platforms} key={e.id} />);
        break;
      }
      
      // console.log(genree[2].games)
      
      
      
      function a() {
        // console.log(store.getState())
        // setCardsState((prevState) => ({...prevState, typeView:"genre"}))
        // console.log(cardsState)
        dispatch(changeView("genre"))
      }
      
      
      
      
      // const cardsdesc = data.sort(desc).map(e => <Card name={e.name} img={e.img} key={e.id}/>)
      
      // const genree = props.props.genres[2].games
      // const ss = []
      // const cardsgenre = data.forEach(function(e) {
        //     if (genree[2].games.includes(e.name)) {
          //         ss.push(e)
    //     }})
    //     const ger = ss.map(e => <Card name={e.name} img={e.img} key={e.id}/>)
    
    const pag = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 ]

    let arr = pag.map(el => el+(15*(cardsState.index)))
    const displayp = displayArray.filter((e,i) => arr.includes(i))
    
    // const cardpagasc = cardsasc.filter((e,i) => arr.includes(i))
    
    const paginas = Math.ceil((displayArray.length/15))
    const paginado = []
    const botones = () => {
      for (let i=0; i<paginas; i++) {
        paginado.push(<button type="button" key={i} onClick={() => setCardsState((prevState) => ({...prevState, index:`${i}`}))}>{i+1}</button>)
      }
      
    }
    botones()
    return (
        <div>
            {displayp}
            <div>
                {paginado.length > 1 ? paginado : <></>}
            </div>
            <p>type of view</p>
            {/* <button type="button" onClick={() => setCardsState((prevState) => ({...prevState, typeView:"asc"}))}>asc</button> */}
            <button type="button" onClick={a}>asc</button>
        </div>
    )
}