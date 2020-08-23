import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './App.css'
import {ShopProvider} from './context/Context.js'

ReactDOM.render(<ShopProvider><App /></ShopProvider>, document.getElementById('app'));