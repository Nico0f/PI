import React from "react"
import './Form.css';
export default function Form() {



    const [formData, setFormData] = React.useState(
        {
            name: "", 
            description: "", 
            releaseDate: "", 
            rating: 0, 
            genres: [],
            platforms: []
        }
    )

    
    function handleChange(event) {
        // const {name, value, type, checked} = event.target
        // setFormData(prevFormData => {
        //     return {
        //         ...prevFormData,
        //         [name]: type === "checkbox" ? checked : value
        //     }
        // })
    }
    
    function handleSubmit(event) {
        // event.preventDefault()
        // /index.html?firstName=asdasd&lastName=asdasd&email=&comments=&isFriendly=on&favColor=red
        // submitToApi(formData)
        console.log(formData)
    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Game Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
            />
            <input
                type="text"
                placeholder="Description"
                onChange={handleChange}
                name="description"
                value={formData.description}
            />
            <input
                type="releaseDate"
                placeholder="Release Date"
                onChange={handleChange}
                name="releaseDate"
                value={formData.releaseDate}
            />
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            <fieldset className="fieldSet">
                    <legend>Genres</legend>

                    <input
                        type="radio"
                        id='Action'
                        name='Action'
                        value='Action'
                        // checked={genre === "Action"}
                        onChange={handleChange}
                    />
                    <label htmlFor='Action'>Action</label>
                    <br />

                    <input
                        type="radio"
                        id="Adventure"
                        name="Adventure"
                        value="Adventure"
                        // checked={genre === "Adventure"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Adventure">Adventure</label>

                    <br />

                    <input
                        type="radio"
                        id="Arcade"
                        name="Arcade"
                        value="Arcade"
                        // checked={genre === "Arcade"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Arcade">Arcade</label>
                    <br />

                    <input
                        type="radio"
                        id="Board Games"
                        name="Board Games"
                        value="Board Games"
                        // checked={genre === "Board Games"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Board Games">Board Games</label>
                    <br />

                    <input
                        type="radio"
                        id="Card"
                        name="Card"
                        value="Card"
                        // checked={genre === "Card"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Card">Card</label>
                    <br />

                    <input
                        type="radio"
                        id="Casual"
                        name="Casual"
                        value="Casual"
                        // checked={genre === "Casual"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Casual">Casual</label>
                    <br />

                    <input
                        type="radio"
                        id="Educational"
                        name="Educational"
                        value="Educational"
                        // checked={genre === "Educational"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Educational">Educational</label>
                    <br />

                    <input
                        type="radio"
                        id="Family"
                        name="Family"
                        value="Family"
                        // checked={genre === "Family"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Family">Family</label>
                    <br />

                    <input
                        type="radio"
                        id="Fighting"
                        name="Fighting"
                        value="Fighting"
                        // checked={genre === "Fighting"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Fighting">Fighting</label>
                    <br />

                    <input
                        type="radio"
                        id="Indie"
                        name="Indie"
                        value="Indie"
                        // checked={genre === "Indie"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Indie">Indie</label>
                    <br />

                    <input
                        type="radio"
                        id="Massively Multiplayer"
                        name="Massively Multiplayer"
                        value="Massively Multiplayer"
                        // checked={genre === "Massively Multiplayer"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Massively Multiplayer">Massively Multiplayer</label>
                    <br />

                    <input
                        type="radio"
                        id="Platformer"
                        name="Platformer"
                        value="Platformer"
                        // checked={genre === "Platformer"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Platformer">Platformer</label>
                    <br />

                    <input
                        type="radio"
                        id="Puzzle"
                        name="Puzzle"
                        value="Puzzle"
                        // checked={genre === "Puzzle"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Puzzle">Puzzle</label>
                    <br />

                    <input
                        type="radio"
                        id="RPG"
                        name="RPG"
                        value="RPG"
                        // checked={genre === "RPG"}
                        onChange={handleChange}
                    />
                    <label htmlFor="RPG">RPG</label>
                    <br />

                    <input
                        type="radio"
                        id="Racing"
                        name="Racing"
                        value="Racing"
                        // checked={genre === "Racing"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Racing">Racing</label>
                    <br />


                    <input
                        type="radio"
                        id="Shooter"
                        name="Shooter"
                        value="Shooter"
                        // checked={genre === "Shooter"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Shooter">Shooter</label>
                    <br />

                    <input
                        type="radio"
                        id="Simulation"
                        name="Simulation"
                        value="Simulation"
                        // checked={genre === "Simulation"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Simulation">Simulation</label>
                    <br />

                    <input
                        type="radio"
                        id="Sports"
                        name="Sports"
                        value="Sports"
                        // checked={genre === "Sports"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Sports">Sports</label>
                    <br />

                    <input
                        type="radio"
                        id="Strategy"
                        name="Strategy"
                        value="Strategy"
                        // checked={genre === "Strategy"}
                        onChange={handleChange}
                    />
                    <label htmlFor="Strategy">Strategy</label>
                    <br />
                </fieldset>
            <br />
            
            <label htmlFor="rating">Rating</label>
            <br />
            <select 
                id="rating" 
                value={formData.rating}
                onChange={handleChange}
                name="rating"
            >
                <option value="0">Choose option ...</option>
                <option value="red">1</option>
                <option value="orange">2</option>
                <option value="yellow">3</option>
                <option value="green">4</option>
                <option value="blue">5</option>
            </select>
            <br />
            <br />
            <button>Submit</button>
        </form>
        </div>
    )
}

// [
//     "PC",
//     "Xbox Series S/X",
//     "PlayStation 4",
//     "PlayStation 3",
//     "Xbox 360",
//     "Xbox One",
//     "PlayStation 5",
//     "Nintendo Switch",
//     "Linux",
//     "macOS",
//     "Android",
//     "iOS",
//     "Xbox",
//     "PS Vita",
//     "Web",
//     "Wii U",
//     "Nintendo 3DS",
//     "PlayStation 2",
//     "Dreamcast",
//     "PSP"
//   ]

// Ruta de creación de videojuegos: debe contener

// [ ] Un formulario controlado con JavaScript con los siguientes campos:
// Nombre
// Descripción
// Fecha de lanzamiento
// Rating
// [ ] Posibilidad de seleccionar/agregar varios géneros
// [ ] Posibilidad de seleccionar/agregar varias plataformas
// [ ] Botón/Opción para crear un nuevo videojuego
// Es requisito que el formulario de creación esté validado con JavaScript y no sólo con validaciones HTML. Pueden agregar las validaciones que consideren. Por ejemplo: Que el nombre del juego no pueda contener algunos símbolos, que el rating no pueda exceder determinado valor, etc.