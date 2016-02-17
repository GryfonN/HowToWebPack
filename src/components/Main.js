require('normalize.css');
require('styles/App.css');

import React from 'react';
import Logo from './Logo.react.jsx';
import BPopupTest from './BootstrapPopupTest.react.jsx';
import BButtonTest from './BootstrapButtonTest.react.jsx';


let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Logo/>
        <img src={yeomanImage} alt="Yeoman Generator"/>
        <BButtonTest/>
        <br/>
        <BPopupTest/>
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
