import React              from "react";
import ReactDOM           from "react-dom";
import {createStore}      from "redux";
import {Provider}         from "react-redux";
import App                from "./components/App";
import reducer from './reducers/index';
import * as serviceWorker from "./serviceWorker";

export const initialState = {
  filter: 'All',
  books: [
      {id: Math.random(), title: 'The Narrative of Arthur Gordon Pym of Nantucket', category: 'Horror'},
      {id: Math.random(), title: 'My Name is Khan', category: 'Action'}
    ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
