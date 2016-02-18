var $ = window.jQuery = require('jquery');
//Alias v base webpack conf
require('@semantic/semantic.min.css');
require('@semantic/semantic.min.js');

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Logo from './components/Logo.react.jsx';

$(function () {
  console.warn('jquery works');
});

ReactDOM.render(<Logo/>, document.getElementById('container-logo'));

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
