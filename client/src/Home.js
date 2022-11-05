// import './App.css';
import { Link } from 'react-router-dom';


import store from "./store"
import {add_game, loading, add_genre} from "./actions/index";
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';





const Home = ({add_game, loading, add_genre}) => {

  const history = useHistory();

  function getall() {
  //   // await add_game({hola:"jaja"})
  //   // await console.log(store.getState())
  //     // fetch("http://localhost:3001/videogame")
  //     fetch("http://localhost:3001/videogames")
  //       .then(data => data.json())
  //       .then(res => res.forEach(e => add_game(e)))
  //       .then(history.push('/home'))
  //     fetch("http://localhost:3001/genres")
  //       .then(data => data.json())
  //       .then(res => res.forEach(e => add_genre(e)))
        fetch("http://localhost:3001/videogames")
          .then(data => "http://localhost:3001/genres")
          .then(res => history.push('/home'))
  }   

return (
  <div className="App">
    <h1>Otra pag</h1>
    {/* <Link to="/home"><button type="button" >asdasdasd</button></Link> */}
    <button type="button" onClick={getall}>asdasdasd</button>
  </div>
);
}


export default connect(null, {add_game, loading, add_genre} )(Home);

// function Home() {

//     // function getall() {
//     //     fetch("http://localhost:3001/videogame")
//     // }

//   return (
//     <div className="App">
//       <h1>Otra pag</h1>
//       <Link to="/home"><button type="button">asdasdasd</button></Link>
//     </div>
//   );
// }

// export default Home;