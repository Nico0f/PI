import "./styles/Sidebar.css"
import Genres from "./Genres"
import Order from "./Order"

export default function Sidebar(props) {


    
    return (
        <div className="sidebarDiv">
            <Genres changeGenre={props.changeGenre}/>
            <Order />
        </div>
    )
}