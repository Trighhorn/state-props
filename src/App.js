import React, { Component } from 'react';

import Navbar from './Navbar';
import Welcome from './welcome'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Abrahan"
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Welcome name = {this.state.name}/> 
        <Welcome name = {'micheal'}/> 
      </div>
    );
  }

  
}


export default App;
