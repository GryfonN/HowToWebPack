require('normalize.css');
require('styles/App.css');

import React from 'react';
import Logo from './Logo.react.jsx';
import SemanticUiTest from './SemanticUiTest.react.js';


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Logo/>
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <SemanticUiTest/>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
