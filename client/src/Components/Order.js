import {changeView} from "../actions/index";
import { useDispatch, useSelector } from "react-redux";


export default function Order() {

    const dispatch = useDispatch()
    const typeView = useSelector(state => state.typeView)

    function handleChange(event) {
        dispatch(changeView(event.target.value))
    }




    return (
        <div>
            <label htmlFor="order">Sort by alphabetical</label>
            <select 
                id="order" 
                value={typeView}
                onChange={handleChange}
                name="order"
            >
                <option value="">Choose...</option>
                <option value="asc">Alphabetical A-Z</option>
                <option value="desc">Alphabetical Z-A</option>
            </select>
            <br></br>
            <label htmlFor="order">Sort by rating</label>
            <select 
                id="order" 
                value={typeView}
                onChange={handleChange}
                name="order"
            >
                <option value="">Choose...</option>
                <option value="ratingasc">Rating 1-5</option>
                <option value="ratingdesc">Rating 5-1</option>

            </select>
            <br></br>
            <label htmlFor="order">Sort by origin</label>
            <select 
                id="order" 
                value={typeView}
                onChange={handleChange}
                name="order"
            >
                <option value="">Choose...</option>
                <option value="api">DataBase</option>
                <option value="db">API</option>
            </select>
        </div>
    )

}