var $ = require('jquery');
require('normalize.css');
require('styles/App.css');

import React from 'react';
import Logo from './Logo.react.jsx';

let yeomanImage = require('../images/yeoman.png');

console.log("test MAIN");
$(function () {
  console.warn('jquery works');
});

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Logo/>
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
