// import './App.css';
import { Link } from 'react-router-dom';

function Home() {

    // function getall() {
    //     fetch("http://localhost:3001/videogame")
    // }

  return (
    <div className="App">
      <h1>Otra pag</h1>
      <Link to="/home"><button type="button">asdasdasd</button></Link>
    </div>
  );
}

export default Home;
