import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState ={
  totLikes:0,
  totDislikes:0
}
const mainReducer = (prevstate=initialState, action)=>{      
  return{...prevstate}
}
const globalStore=createStore(mainReducer)
ReactDOM.render(
  <Provider store={globalStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
