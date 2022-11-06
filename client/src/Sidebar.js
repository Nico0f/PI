import Genres from "./Genres"
import Order from "./Order"

export default function Sidebar(props) {


    
    return (
        <div>
            <Genres changeGenre={props.changeGenre}/>
            <Order />
        </div>
    )
}