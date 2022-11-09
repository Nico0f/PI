import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Game from './Components/Game';
import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import  { Provider } from 'react-redux';
import store from "./store/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
          <Route exact path="/">
          <Home />
          </Route>
          <Route path="/home">
            <Navbar/>
              <Switch>
                <Route exact path="/home">
                  <App />
                </Route>
                <Route exact path="/home/creategame">
                  <Form />
                </Route>
                <Route exact path="/home/:id">
                  <Game />
                </Route>
              </Switch>
          </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
