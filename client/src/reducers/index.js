const initialState = {
    games: [],
    loading: false,
    genres: []
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
        default:
            return { ...state }
    }
}
  