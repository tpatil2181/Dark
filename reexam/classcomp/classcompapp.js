import React, { Component } from 'react';
import Greet from './Greet';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple React App</h1>
        <Greet name="John" />
        <Greet name="Alice" />
        <Greet name="Bob" />
      </div>
    );
  }
}

export default App;
