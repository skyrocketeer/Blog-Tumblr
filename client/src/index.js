import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/iconic/css/material-design-iconic-font.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
