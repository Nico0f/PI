import React from "react";
import "./Navbar.css"
import {addSearch, changeView} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';


function Navbar() {

    const history = useHistory();

    const [search, setSearch] = React.useState("")


    const typeView = useSelector(state => state.search)
    const dispatch = useDispatch()

    function handleChange(event) {
        event.preventDefault()
        setSearch(event.target.value)
        console.log(event.target.value)
    }


    function handleSubmit(event) {
        event.preventDefault()
        // console.log(search)
        fetch(`http://localhost:3001/videogames?name=${search}`)
            .then(data => data.json())
            .then(res => dispatch(addSearch(res)))
            .then(res => dispatch(changeView("search")))
            .then(res => history.push("/home"))
            .catch(err => console.log("no games"))

    }


    return (
        <div className="Navbar">
            <div><h2 onClick={() => history.push("/home")}>Gam.IO</h2></div>
            <form className="searchBar-container" onSubmit={handleSubmit}>
                <input type="text" className="searchBar" placeholder="Search Game..." onChange={handleChange} value={search} ></input>
                <button type="submit" className="button"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="30" height="30"
viewBox="0 0 30 30">
<path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
</svg></button>
                
            </form>

            <Link to="/home/creategame"><button>Create Videogame</button></Link>

        </div>
    )
};

export default Navbar;