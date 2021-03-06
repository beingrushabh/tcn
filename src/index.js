import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import { BrowserRouter } from 'react-router-dom'

Store.firebaseAuthIsReady.then(()=> {
    ReactDOM.render(<BrowserRouter><Provider store = { Store }><App /></Provider></BrowserRouter>, document.getElementById('root'));
})


///ReactDOM.render(<App />, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
