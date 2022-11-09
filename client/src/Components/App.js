import './App.css';
import store from "../store/store"
import Cards from "./Cards"
import React from 'react';
import Sidebar from './Sidebar';

import {add_game, loading, add_genre} from "../actions/index";


import { useDispatch, useSelector } from "react-redux";


import {useHistory} from 'react-router-dom';


function App() {

  const history = useHistory();

  const [state, setState] = React.useState({games: [], genres: [], genre:""})

  const games = useSelector(state => state.games)

  const dispatch = useDispatch()

  // React.useEffect(() => {
  //   fetch("http://localhost:3001/videogame")
  // }, [])
  React.useEffect(async () => {
    if (!games.length) {
      await fetch("http://localhost:3001/videogames")
                .then(data => data.json())
                .then(res => res.forEach(e => dispatch(add_game(e))))
                .then(data => data)
      await fetch("http://localhost:3001/genres")
                .then(data => data.json())
                .then(res => res.forEach(e => dispatch(add_genre(e))))
                .then(data => data)
        //setCardsState((prevState) => ({...prevState, typeView:"genre"}))
      //   .then(res => console.log(res))
    }
    // if (!state.genres.length) {
    //   fetch("http://localhost:3001/genres")
    //     .then(data => data.json())
    //     .then(res => setState(prevState => ({...prevState, genres: res})))
    //     // .then(res => console.log(res))
    // }
      
  }, [])


  function changeGenre(value) {
    setState((prevState => ({...prevState, genre: value})))
  }


  return (
    <div className="App">
      <div className="mainDiv">
        <div className="sideBar">
          <Sidebar changeGenre={changeGenre}/>
        </div>
        <div className="cardDiv">
        {!games.length ? "loading" : <Cards />}
        </div>
      </div>
    </div>
  );
}

export default App;


