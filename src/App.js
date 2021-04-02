import React from "react";
import "../src/App.css";

export const add = (a, b) => a + b;

export const total = (tax, amt) => `$${add(tax, amt)}`;

const App = () => {
  return (
    <div className="App-header">
      <h1>Learn React Testing</h1>
      <button id="btn">Click</button>
    </div>
  );
};

export default App;
