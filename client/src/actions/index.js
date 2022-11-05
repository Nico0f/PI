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

export function add_all(payload) {
    return {
        type: 'ADD_ALL',
        payload
    }
}

export function allgames() {
    return function (dispatch) {
        fetch("http://localhost:3001/videogames")
        .then(res => res.json())
        .then(d => dispatch(add_game(d)))
        .catch(e => console.log(e));
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