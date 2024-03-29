import axios from "axios"
export function add_game(payload) {
    return {
      type: 'ADD_GAME',
      payload
    }
  };
export function loading() {
    return {
      type: 'LOADING',
    }
  }
  
export function add_genre(payload) {
    return {
      type: 'ADD_GENRE',
      payload
    }

  }
export function change_genre(payload) {
    return {
      type: 'CHANGE_GENRE',
      payload
    }
  }

export function add_all(payload) {
    return {
        type: 'ADD_ALL',
        payload
    }
}

export function allgames() {
    return function (dispatch) {
        axios.get("http://localhost:3001/videogames")
        .then(res => res.data)
        .then(d => dispatch(add_game(d)))
        .catch(e => console.log(e));
    }
  }

  export function changeView(payload) {
      return {
        type: 'CHANGE_VIEW',
        payload
      }
 
    }
  export function addSearch(payload) {
      return {
        type: 'ADD_SEARCH',
        payload
      }
    }
  export function createVideogame(payload) {
    axios.post("http://localhost:3001/videogames", payload)
      return {
        type: 'CREATE_VIDEOGAME',
        payload
      }
    }
  
// export function receivePost(post) {
//     return {
//       type: 'RECEIVE_POST',
//       post
//     }
//   }
  
// export function fetchPost(valor) {
//     return function (dispatch) {
//       dispatch(getPost());
//       axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`)
//         .then(r => r.data)
//         .then(d => dispatch(receivePost(d)))
//         .catch(e => console.log(e));
//     }
//   }