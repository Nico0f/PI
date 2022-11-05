import "./Card.css"

export default function Card(props) {

    return (
        <div className="Card">
            <div className="Card-content">
                <img className="Card-img" src={`${props.img}`} />
                <p>{props.name}</p>
                <p>{props.id}</p>
            </div>
        </div>
    )
}