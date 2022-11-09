import "./styles/Card.css"
import {useHistory} from 'react-router-dom';
import { useSelector } from "react-redux";

export default function Card(props) {

const genresa = useSelector(state => state.genres)

let genres = genresa.filter(e => e.games.includes(props.name)).map(e => e.genre_name)

let genresDisplay= genres.map(e => <span key={e}>{e} </span>)

    
    const history = useHistory();

    return (
        <div className="Card">
            <div onClick={() => history.push(`/home/${props.id}`)} className="Card-content">
                <img className="Card-img" src={`${props.img}`} alt="game_img"/>
                {/* <p>{props.platforms}</p> */}
                <div className="cardInfo">
                <h2>{props.name}</h2>
                <p>{["⭐", "⭐", "⭐", "⭐", "⭐"].fill(undefined, props.rating)}{props.rating} ({props.rating_float})</p>
                {genresDisplay.length ? <p><b>Genres:</b> {genresDisplay}</p> : <></>}
                </div>
            </div>
        </div>
    )
}