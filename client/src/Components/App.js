import './styles/App.css';
import Cards from "./Cards"
import React from 'react';
import Sidebar from './Sidebar';

import {add_game, add_genre} from "../actions/index";


import { useDispatch, useSelector } from "react-redux";


import {useHistory} from 'react-router-dom';


function App() {

  const history = useHistory();

  const [state, setState] = React.useState({games: [], genres: [], genre:""})

  const games = useSelector(state => state.games)

  const dispatch = useDispatch()


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
    }
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


