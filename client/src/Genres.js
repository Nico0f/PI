import React from "react"
import {changeView} from "./actions/index";
import { useDispatch, useSelector } from "react-redux";
export default function Genres(props) {
    const dispatch = useDispatch()

    const [genre, setGenre] = React.useState("Adventure")

    function handleChange(event) {
        setGenre(event.target.value)
        console.log(genre)
    }

    function handleSubmit(event) {
        event.preventDefault()
        props.changeGenre(genre)
        dispatch(changeView("genre"))
        // console.log(genre)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Genres</legend>

                    <input
                        type="radio"
                        id='Action'
                        name='Action'
                        value='Action'
                        checked={genre === "Action"}
                        onChange={handleChange}
                    />
                    <label htmlFor='Action'>Action</label>
                    <br />

                    <input
                        type="radio"
                        id="Adventure"
                        name="Adventure"
                        value="Adventure"
                        checked={genre === "Adventure"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Adventure">Adventure</label>

                    <br />

                    <input
                        type="radio"
                        id="Arcade"
                        name="Arcade"
                        value="Arcade"
                        checked={genre === "Arcade"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Arcade">Arcade</label>
                    <br />

                    <input
                        type="radio"
                        id="Board Games"
                        name="Board Games"
                        value="Board Games"
                        checked={genre === "Board Games"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Board Games">Board Games</label>
                    <br />

                    <input
                        type="radio"
                        id="Card"
                        name="Card"
                        value="Card"
                        checked={genre === "Card"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Card">Card</label>
                    <br />

                    <input
                        type="radio"
                        id="Casual"
                        name="Casual"
                        value="Casual"
                        checked={genre === "Casual"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Casual">Casual</label>
                    <br />

                    <input
                        type="radio"
                        id="Educational"
                        name="Educational"
                        value="Educational"
                        checked={genre === "Educational"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Educational">Educational</label>
                    <br />

                    <input
                        type="radio"
                        id="Family"
                        name="Family"
                        value="Family"
                        checked={genre === "Family"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Family">Family</label>
                    <br />

                    <input
                        type="radio"
                        id="Fighting"
                        name="Fighting"
                        value="Fighting"
                        checked={genre === "Fighting"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Fighting">Fighting</label>
                    <br />

                    <input
                        type="radio"
                        id="Indie"
                        name="Indie"
                        value="Indie"
                        checked={genre === "Indie"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Indie">Indie</label>
                    <br />

                    <input
                        type="radio"
                        id="Massively Multiplayer"
                        name="Massively Multiplayer"
                        value="Massively Multiplayer"
                        checked={genre === "Massively Multiplayer"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Massively Multiplayer">Massively Multiplayer</label>
                    <br />

                    <input
                        type="radio"
                        id="Platformer"
                        name="Platformer"
                        value="Platformer"
                        checked={genre === "Platformer"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Platformer">Platformer</label>
                    <br />

                    <input
                        type="radio"
                        id="Puzzle"
                        name="Puzzle"
                        value="Puzzle"
                        checked={genre === "Puzzle"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Puzzle">Puzzle</label>
                    <br />

                    <input
                        type="radio"
                        id="RPG"
                        name="RPG"
                        value="RPG"
                        checked={genre === "RPG"}
                        onChange={handleChange}
                    />
                    <label htmlFor="RPG">RPG</label>
                    <br />

                    <input
                        type="radio"
                        id="Racing"
                        name="Racing"
                        value="Racing"
                        checked={genre === "Racing"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Racing">Racing</label>
                    <br />


                    <input
                        type="radio"
                        id="Shooter"
                        name="Shooter"
                        value="Shooter"
                        checked={genre === "Shooter"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Shooter">Shooter</label>
                    <br />

                    <input
                        type="radio"
                        id="Simulation"
                        name="Simulation"
                        value="Simulation"
                        checked={genre === "Simulation"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Simulation">Simulation</label>
                    <br />

                    <input
                        type="radio"
                        id="Sports"
                        name="Sports"
                        value="Sports"
                        checked={genre === "Sports"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Sports">Sports</label>
                    <br />

                    <input
                        type="radio"
                        id="Strategy"
                        name="Strategy"
                        value="Strategy"
                        checked={genre === "Strategy"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Strategy">Strategy</label>
                    <br />
                </fieldset>
                <button>Submit</button>
            </form>
        </div>
    )
}