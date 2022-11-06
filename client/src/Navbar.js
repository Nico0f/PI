import React from "react";
import "./Navbar.css"
import {addSearch, changeView} from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {

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
            .catch(err => console.log("no games"))

    }


    return (
        <div className="Navbar">
            <div><p>GamePedia</p></div>
            <form className="searchBar" onSubmit={handleSubmit}>
                <input placeholder="Search Game..." onChange={handleChange} value={search} ></input>
                <button type="submit" >Favs</button>
            </form>

        </div>
    )
};

export default Navbar;