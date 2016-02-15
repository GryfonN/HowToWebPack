import React from 'react';

let imageLogo = require('../images/logo.png');

class Logo extends React.Component {

  componentWillMount() {
    console.log('Logo> componentWillMount');
  }

  componentDidMount() {
    console.log('Logo> componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('Logo> componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('Logo> shouldComponentUpdate');
  }

  componentWillUpdate() {
    console.log('Logo> componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('Logo> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Logo> componentWillUnmount');
  }

  render() {
    return (
      <img id="logo" src={imageLogo} alt="Logo Slobodný vysielač"/>
    );
  }

}

export default Logo;
