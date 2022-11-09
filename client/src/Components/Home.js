// import './App.css';
import { Link } from 'react-router-dom';
import './styles/Home.css';


import store from "../store/store"
import {add_game, loading, add_genre} from "../actions/index";
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import React from 'react';





const Home = ({add_game, add_genre}) => {

  const [loading, setLoading] = React.useState(false)

  const history = useHistory();

  async function getall() {
  setLoading(true)
        await fetch("http://localhost:3001/videogames")
        await fetch("http://localhost:3001/genres")
          .then(res => history.push('/home'))
  }   

  return (
    <div className="App">
      <h1>Gam.IO</h1>
      {!loading && <button type="button" onClick={getall}>Enter</button>}
      {loading && <div>
        <div class="loader">
          <svg viewBox="0 0 80 80">
            <circle id="test" cx="40" cy="40" r="32"></circle>
          </svg>
        </div>

        <div class="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div class="loader">
          <svg viewBox="0 0 80 80">
            <rect x="8" y="8" width="64" height="64"></rect>
          </svg>
        </div>
      </div>}
    </div>
  );
}


export default connect(null, {add_game, loading, add_genre} )(Home);