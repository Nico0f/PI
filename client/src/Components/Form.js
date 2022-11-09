import React from "react"
import './styles/Form.css';
import { createVideogame } from "../actions/index"




export default function Form() {

    
    
    const [formData, setFormData] = React.useState(
        {
            name: "", 
            description: "", 
            releaseDate: "",
            img: "",
            rating: 0, 
            genres: [],
            platforms: []
        })
        
        const [errors, setErrors] = React.useState({
            name: 'Name is required', 
            description: 'Description must be longer than 10 characters and shorter than 300 characters', 
            releaseDate: 'Release Date is required', 
            img: 'Image URL invalid', 
            rating: 'Rating is required', 
            genres: 'Genres are required',
            platforms: 'Platforms are required'
        })

    function validate(value) {
        if (!value.name) {
            setErrors((prevState) => ({...prevState, name: 'Name is required'}))
        }
        if (value.name) {
            setErrors((prevState) => ({...prevState, name: ''}))
        }
        if (value.description.length<10 || value.description.length>300) {
            setErrors((prevState) => ({...prevState, description: 'Description must be longer than 10 characters and shorter than 300 characters'}))
        }
        if (value.description.length>=10 && value.description.length<300) {
            setErrors((prevState) => ({...prevState, description: ''}))
        }
        if (!value.img) {
            setErrors((prevState) => ({...prevState, img: 'Image URL invalid'}))
        }
        if (value.img) {
            setErrors((prevState) => ({...prevState, img: ''}))
        }
        if (!value.releaseDate.length) {
            setErrors((prevState) => ({...prevState, releaseDate: 'Release Date is required'}))
        }
        if (value.releaseDate.length) {
            setErrors((prevState) => ({...prevState, releaseDate: ''}))
        }
        if (!value.rating) {
            setErrors((prevState) => ({...prevState, rating: 'Rating is required'}))
        }
        if (value.rating) {
            setErrors((prevState) => ({...prevState, rating: ''}))
        }
        if (!value.genres.length) {
            setErrors((prevState) => ({...prevState, genres: 'Genres are required'}))
        }
        if (value.genres.length) {
            setErrors((prevState) => ({...prevState, genres: ''}))
        }
        if (!value.platforms.length) {
            setErrors((prevState) => ({...prevState, platforms: 'Platforms are required'}))
        }
        if (value.platforms.length) {
            setErrors((prevState) => ({...prevState, platforms: ''}))
        }
        return errors
      }
      function handleChangeText(event) {
          const {name, value} = event.target
          setFormData((prevState) => ({...prevState, [name]: value}));
          validate(formData);
      }
    
    function handleChange(event) {
        const {name, value} = event.target
        validate(formData)
        
        if (!formData[name].includes(value)){
            setFormData((prevState) => ({...prevState, [name]: [...prevState[name], value]}))
            console.log("agrego")
        } else {
            setFormData((prevState) => ({...prevState, [name]: prevState[name].filter(e => e !== value)}))
            console.log("saco")
        }
        
    }


    function handleChangeRat(event) {
        validate(formData)
        setFormData((prevState) => ({...prevState, rating: parseInt(event.target.value)}))
    }
    
    async function handleSubmit(event) {
        event.preventDefault()
        if (errors.name || errors.description || errors.img || errors.rating || errors.releaseDate || errors.platforms || errors.genres) {
            alert("Missing fields")
        } else {
            try {
                createVideogame(formData)
                setFormData({
                        name: "", 
                        description: "", 
                        releaseDate: "",
                        img: "",
                        rating: 0, 
                        genres: [],
                        platforms: []
                    })
                setErrors({
                    name: 'Name is required', 
                    description: 'Description must be longer than 10 characters and shorter than 300 characters', 
                    releaseDate: 'Release Date is required', 
                    img: 'Image URL invalid', 
                    rating: 'Rating is required', 
                    genres: 'Genres are required',
                    platforms: 'Platforms are required'
                })
                alert("Videogame created")
            } catch {
                alert("Error")
            }
        }
    }

    function a() {
        console.log(formData)
    }



    return (
        <div className="formDiv">
            <h2 style={{textAlign:"center"}}>Game Information</h2>
            <form onSubmit={handleSubmit}>
            <div className="formContainer">
            <div className="infoFirst">
            <div>
                <h2>Game Name</h2>
            <input
                type="text"
                placeholder="Game Name"
                onChange={handleChangeText}
                name="name"
                value={formData.name}
                className={errors.name ? "textBoxError" : "textBox"}
            />

            <h2>Description</h2>
            <textarea 
                value={formData.description}
                placeholder="Description..."
                onChange={handleChangeText}
                name="description"
                className={errors.description ? "textAreaError" : "textArea"}
            />
            <br />
            <label htmlFor="releaseDate">Release Date</label>
                    <input type="date" id="releaseDate" name="releaseDate"
                        value={formData.releaseDate}
                        onChange={handleChangeText}
                        min="1900-01-01" max="2022-11-07"></input>
            
            <br />
            <br />
            <br />
            <label htmlFor="rating">Rating</label>
            <select 
                id="rating" 
                value={formData.rating}
                onChange={handleChangeRat}
                name="rating"
            >
                <option value={0}>Choose rating...</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            </div>
            <br />

            <h2>Image</h2>
        <input
            type="text"
            placeholder="Image URL..."
            onChange={handleChangeText}
            name="img"
            value={formData.img}
            className={errors.img ? "textBoxError" : "textBox"}
        />

        </div>
        <div className="infoSecond">
            
            <fieldset className={errors.genres ? "fieldSetError" : "fieldSet"}>
                    <legend>Genres</legend>

                    <input
                        type="checkbox"
                        id='Action'
                        name='genres'
                        value='Action'
                        checked={formData.genres.includes("Action")}
                        onChange={handleChange}
                    />
                    <label htmlFor='Action' className="cont">Action</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Adventure"
                        name="genres"
                        value="Adventure"
                        checked={formData.genres.includes("Adventure")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Adventure" className="cont">Adventure</label>

                    <br />

                    <input
                        type="checkbox"
                        id="Arcade"
                        name="genres"
                        value="Arcade"
                        checked={formData.genres.includes("Arcade")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Arcade">Arcade</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Board Games"
                        name="genres"
                        value="Board Games"
                        checked={formData.genres.includes("Board Games")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Board Games">Board Games</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Card"
                        name="genres"
                        value="Card"
                        checked={formData.genres.includes("Card")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Card">Card</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Casual"
                        name="genres"
                        value="Casual"
                        checked={formData.genres.includes("Casual")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Casual">Casual</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Educational"
                        name="genres"
                        value="Educational"
                        checked={formData.genres.includes("Educational")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Educational">Educational</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Family"
                        name="genres"
                        value="Family"
                        checked={formData.genres.includes("Family")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Family">Family</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Fighting"
                        name="genres"
                        value="Fighting"
                        checked={formData.genres.includes("Fighting")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Fighting">Fighting</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Indie"
                        name="genres"
                        value="Indie"
                        checked={formData.genres.includes("Indie")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Indie">Indie</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Massively Multiplayer"
                        name="genres"
                        value="Massively Multiplayer"
                        checked={formData.genres.includes("Massively Multiplayer")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Massively Multiplayer">Massively Multiplayer</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Platformer"
                        name="genres"
                        value="Platformer"
                        checked={formData.genres.includes("Platformer")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Platformer">Platformer</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Puzzle"
                        name="genres"
                        value="Puzzle"
                        checked={formData.genres.includes("Puzzle")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Puzzle">Puzzle</label>
                    <br />

                    <input
                        type="checkbox"
                        id="RPG"
                        name="genres"
                        value="RPG"
                        checked={formData.genres.includes("RPG")}
                        onChange={handleChange}
                    />
                    <label htmlFor="RPG">RPG</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Racing"
                        name="genres"
                        value="Racing"
                        checked={formData.genres.includes("Racing")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Racing">Racing</label>
                    <br />


                    <input
                        type="checkbox"
                        id="Shooter"
                        name="genres"
                        value="Shooter"
                        checked={formData.genres.includes("Shooter")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Shooter">Shooter</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Simulation"
                        name="genres"
                        value="Simulation"
                        checked={formData.genres.includes("Simulation")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Simulation">Simulation</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Sports"
                        name="genres"
                        value="Sports"
                        checked={formData.genres.includes("Sports")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Sports">Sports</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Strategy"
                        name="genres"
                        value="Strategy"
                        checked={formData.genres.includes("Strategy")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Strategy">Strategy</label>
                    <br />

                </fieldset>
                <button type="button" onClick={() => setFormData((prevState) => ({...prevState, genres: []}))}>reset</button>



                <fieldset className={errors.platforms ? "fieldSetError" : "fieldSet"}>
                    <legend>Platforms</legend>

                    <input
                        type="checkbox"
                        id='PC'
                        name='platforms'
                        value='PC'
                        checked={formData.platforms.includes("PC")}
                        onChange={handleChange}
                    />
                    <label htmlFor='PC' className="cont">PC</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Xbox Series S/X"
                        name="platforms"
                        value="Xbox Series S/X"
                        checked={formData.platforms.includes("Xbox Series S/X")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Xbox Series S/X" className="cont">Xbox Series S/X</label>

                    <br />

                    <input
                        type="checkbox"
                        id="PlayStation 4"
                        name="platforms"
                        value="PlayStation 4"
                        checked={formData.platforms.includes("PlayStation 4")}
                        onChange={handleChange}
                    />
                    <label htmlFor="PlayStation 4">PlayStation 4</label>
                    <br />

                    <input
                        type="checkbox"
                        id="PlayStation 3"
                        name="platforms"
                        value="PlayStation 3"
                        checked={formData.platforms.includes("PlayStation 3")}
                        onChange={handleChange}
                    />
                    <label htmlFor="PlayStation 3">PlayStation 3</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Xbox 360"
                        name="platforms"
                        value="Xbox 360"
                        checked={formData.platforms.includes("Xbox 360")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Xbox 360">Xbox 360</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Xbox One"
                        name="platforms"
                        value="Xbox One"
                        checked={formData.platforms.includes("Xbox One")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Xbox One">Xbox One</label>
                    <br />

                    <input
                        type="checkbox"
                        id="PlayStation 5"
                        name="platforms"
                        value="PlayStation 5"
                        checked={formData.platforms.includes("PlayStation 5")}
                        onChange={handleChange}
                    />
                    <label htmlFor="PlayStation 5">PlayStation 5</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Nintendo Switch"
                        name="platforms"
                        value="Nintendo Switch"
                        checked={formData.platforms.includes("Nintendo Switch")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Nintendo Switch">Nintendo Switch</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Linux"
                        name="platforms"
                        value="Linux"
                        checked={formData.platforms.includes("Linux")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Linux">Linux</label>
                    <br />

                    <input
                        type="checkbox"
                        id="macOS"
                        name="platforms"
                        value="macOS"
                        checked={formData.platforms.includes("macOS")}
                        onChange={handleChange}
                    />
                    <label htmlFor="macOS">macOS</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Android"
                        name="platforms"
                        value="Android"
                        checked={formData.platforms.includes("Android")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Android">Android</label>
                    <br />

                    <input
                        type="checkbox"
                        id="iOS"
                        name="platforms"
                        value="iOS"
                        checked={formData.platforms.includes("iOS")}
                        onChange={handleChange}
                    />
                    <label htmlFor="iOS">iOS</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Xbox"
                        name="platforms"
                        value="Xbox"
                        checked={formData.platforms.includes("Xbox")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Xbox">Xbox</label>
                    <br />

                    <input
                        type="checkbox"
                        id="PS Vita"
                        name="platforms"
                        value="PS Vita"
                        checked={formData.platforms.includes("PS Vita")}
                        onChange={handleChange}
                    />
                    <label htmlFor="PS Vita">PS Vita</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Web"
                        name="platforms"
                        value="Web"
                        checked={formData.platforms.includes("Web")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Web">Web</label>
                    <br />


                    <input
                        type="checkbox"
                        id="Wii U"
                        name="platforms"
                        value="Wii U"
                        checked={formData.platforms.includes("Wii U")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Wii U">Wii U</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Nintendo 3DS"
                        name="platforms"
                        value="Nintendo 3DS"
                        checked={formData.platforms.includes("Nintendo 3DS")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Nintendo 3DS">Nintendo 3DS</label>
                    <br />

                    <input
                        type="checkbox"
                        id="PlayStation 2"
                        name="platforms"
                        value="PlayStation 2"
                        checked={formData.platforms.includes("PlayStation 2")}
                        onChange={handleChange}
                    />
                    <label htmlFor="PlayStation 2">PlayStation 2</label>
                    <br />

                    <input
                        type="checkbox"
                        id="Dreamcast"
                        name="platforms"
                        value="Dreamcast"
                        checked={formData.platforms.includes("Dreamcast")}
                        onChange={handleChange}
                    />
                    <label htmlFor="Dreamcast">Dreamcast</label>
                    <br />

                    <input
                        type="checkbox"
                        id="PSP"
                        name="platforms"
                        value="PSP"
                        checked={formData.platforms.includes("PSP")}
                        onChange={handleChange}
                    />
                    <label htmlFor="PSP">PSP</label>
                    <br />

                </fieldset>
                <button type="button" onClick={() => setFormData((prevState) => ({...prevState, platforms: []}))}>reset</button>





            <br />
            <br />
            <br />
            </div>
            </div>
        </form>
        <div style={{textAlign:"center"}}>
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    )
}