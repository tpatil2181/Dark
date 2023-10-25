import React from 'react';
import Greet from './greet';

function App() {
  return (
    <div>
      <h1>Simple React App</h1>
      <Greet name="John" />
      <Greet name="Alice" />
      <Greet name="Bob" />
    </div>
  );
}

export default App;
