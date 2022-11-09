import "./Card.css"
import {useHistory} from 'react-router-dom';
import store from "../store/store"
import { useSelector } from "react-redux";
import axios from "axios";

export default function Card(props) {

const genresa = useSelector(state => state.genres)

let genres = genresa.filter(e => e.games.includes(props.name)).map(e => e.genre_name)

let genresDisplay= genres.map(e => <span key={e}>{e} </span>)

    
    const history = useHistory();

    return (
        <div className="Card">
            <div className="Card-content">
                <img className="Card-img" src={`${props.img}`} alt="game_img"/>
                {/* <p>{props.platforms}</p> */}
                <h2 onClick={() => history.push(`/home/${props.id}`)}>{props.name}</h2>
                <p>{["⭐", "⭐", "⭐", "⭐", "⭐"].fill(undefined, props.rating)}{props.rating} ({props.rating_float})</p>
                <p>{genresDisplay}</p>
            </div>
        </div>
    )
}