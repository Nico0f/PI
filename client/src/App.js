import './App.css';
import store from "./store"
import Cards from "./Cards"
import React from 'react';
import Sidebar from './Sidebar';

import {add_game, loading, add_genre} from "./actions/index";


import { useDispatch, useSelector } from "react-redux";


import {useHistory} from 'react-router-dom';


function App() {

  const history = useHistory();

  const [state, setState] = React.useState({games: [], genres: [], genre:""})

  const games = useSelector(state => state.games)

  const disptach = useDispatch()

  // React.useEffect(() => {
  //   fetch("http://localhost:3001/videogame")
  // }, [])
  
  React.useEffect(() => {
    if (!state.games.length) {
      fetch("http://localhost:3001/videogames")
        .then(data => data.json())
        .then(res => res.forEach(e => disptach(add_game(e))))
        .then(e => fetch("http://localhost:3001/genres"))
        .then(data => data.json())
        .then(data => data.forEach(e => disptach(add_genre(e))))
        .then(res => setState((prevState) => (store.getState())))
        //setCardsState((prevState) => ({...prevState, typeView:"genre"}))
      //   .then(res => console.log(res))
    }
    // if (!state.genres.length) {
    //   fetch("http://localhost:3001/genres")
    //     .then(data => data.json())
    //     .then(res => setState(prevState => ({...prevState, genres: res})))
    //     // .then(res => console.log(res))
    // }
      
  }, [state.games])

  // setInterval(() => {
  //   setState(store.getState())
  // }, 15000); 
  function display() {
    // disptach(add_game({name:"hola", id:2}))
    // disptach(loading())
    // console.log(state)
    history.push('/creategame')
  }

  function changeGenre(value) {
    setState((prevState => ({...prevState, genre: value})))
  }


  return (
    <div className="App">
      <h1>Home</h1> 
      <button type="button" onClick={display}>Click Me!</button> 
      <div className="mainDiv">
        <div className="sideBar">
          <Sidebar changeGenre={changeGenre}/>
        </div>
        <div className="cardDiv">
        {!state.games.length ? "loading" : <Cards props={state}/>}
        </div>
      </div>
    </div>
  );
}

export default App;


