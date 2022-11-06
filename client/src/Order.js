import {changeView} from "./actions/index";
import { useDispatch, useSelector } from "react-redux";


export default function Order() {

    const dispatch = useDispatch()
    const typeView = useSelector(state => state.typeView)

    function handleChange(event) {
        dispatch(changeView(event.target.value))
    }




    return (
        <div>
            <select 
                id="order" 
                value={typeView}
                onChange={handleChange}
                name="order"
            >
                <option value="asc">Alphabetical asc</option>
                <option value="desc">Alphabetical desc</option>
                <option value="">Rating asc</option>
                <option value="">Rating desc</option>
            </select>
        </div>
    )

}