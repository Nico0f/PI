import React from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import "./styles/Game.css"

export default function Game() {

    const [game, setGame] = React.useState([{name: "", release_date: "", rating_int: 0, platforms: []}])
    const [genres, setGenres] = React.useState({genres: []})
    
    
    const params = useParams();


    React.useEffect(() => {
        axios.get(`http://localhost:3001/videogame/${params.id}`)
            .then(res => res.data)
            .then(data => setGame(data))
    }, []) 
    React.useEffect(() => {
        axios.get("http://localhost:3001/genres")
            .then(res => res.data)
            .then(data => data.filter(e => e.games.includes(game[0].name)))
            .then(data => data.forEach(e => setGenres((prevState) => ({...prevState, genres: [...prevState.genres, e.genre_name]}))))
    }, [game]) 

    let displayGenres = genres.genres.map(e=> <li key={e}>{e}</li>)
    let displayPlatforms = game[0].platforms.map(e=> <li key={e}>{e}</li>)

    return (
        <div className="mainDiv-game">
            <div className="upperDiv">
                <img className="image" src={`${game[0].img}`} />
                <div className="infoDiv">
                <h1>{game[0].name}</h1>
                <h4>Release date: {game[0].release_date}</h4>
                <h4>Rating :{["⭐", "⭐", "⭐", "⭐", "⭐"].fill(undefined, game[0].rating_int)}({game[0].rating_int})</h4>
                <h4>Genres:</h4>
                <ul>
                    {displayGenres}
                </ul>
                </div>

            </div>
            <hr></hr>
            <div className="gameContent">
            <h2>Description</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut leo dui. Aliquam erat volutpat. Maecenas mollis tincidunt sodales. Integer at erat leo. Etiam vitae mattis elit. In dignissim velit rutrum accumsan posuere. Proin ut auctor dolor, nec auctor mauris. Vivamus sed vestibulum tellus. Integer rutrum aliquam felis, a bibendum nibh iaculis et. Suspendisse mattis fringilla nisi, et finibus est vulputate et. Curabitur semper vehicula mauris sed bibendum. Quisque facilisis ligula quis diam hendrerit fermentum. Pellentesque vel orci lacus. Donec vitae orci ipsum. Vestibulum auctor, erat nec ornare facilisis, massa quam maximus neque, malesuada dapibus ipsum ante at mi. Nam tristique fermentum ante, ut dapibus massa. Nunc quis diam mauris. Suspendisse in metus imperdiet, mattis lorem quis, consequat tellus. Ut dictum ante quis sapien suscipit malesuada. Cras luctus interdum ultrices. Cras sit amet risus vitae ligula lacinia feugiat. Maecenas a semper orci. Nullam bibendum luctus turpis eu iaculis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In efficitur ac felis in tempor. Phasellus commodo diam ut ligula maximus gravida. Nullam auctor purus lectus, nec vulputate mauris dignissim sed. Suspendisse potenti. Sed congue finibus justo sit amet facilisis. Aenean tempor vitae elit vitae dapibus. </p>
            <h3><b>Platforms:</b></h3>
            {displayPlatforms}
            </div>
            
        </div>
    )
}