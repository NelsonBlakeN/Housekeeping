import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Entities from './components/entities'

class App extends Component {
  state = {
    scripts: []
  }

  componentDidMount() {
    fetch('https://sleepy-fortress-77799.herokuapp.com/scripts/')
    .then(res => res.json())
    .then((data) => {
      this.setState({ scripts: data })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Entities entities={this.state.scripts} />
    );
  }
}

export default App;
