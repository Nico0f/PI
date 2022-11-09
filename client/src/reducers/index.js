const initialState = {
    games: [],
    loading: false,
    genres: [],
    genre: "",
    typeView: "",
    search: []
  }
  
export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_GAME':
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        case 'ADD_ALL':
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        case 'LOADING':
            return {
                ...state,
                loading: !state.loading
            }
        case 'ADD_GENRE':
            return {
                ...state,
                genres: [...state.genres, action.payload]
            }
        case 'CHANGE_GENRE':
            return {
                ...state,
                genre: action.payload
            }
        case 'CHANGE_VIEW':
            return {
                ...state,
                typeView: action.payload
            }
        case 'ADD_SEARCH':
            return {
                ...state,
                search: action.payload
            }
        case 'CREATE_VIDEOGAME':
            return {
                ...state,
                games: [...state.games, action.payload]
            }
        default:
            return { ...state }
    }
}
  