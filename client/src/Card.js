import "./Card.css"

export default function Card(props) {

    return (
        <div className="Card">
            <div className="Card-content">
                <img className="Card-img" src={`${props.img}`} alt="game_img"/>
                <p>{props.name}</p>
                <p>{props.id}</p>
                <p>{props.rating} ({props.rating_float})</p>
                <p>{props.platforms}</p>
            </div>
        </div>
    )
}