import React from "react";
import "../src/App.css";

export const add = (a, b) => a + b;

export const total = (tax, amt) => `$${add(tax, amt)}`;

const App = () => {
  return <div className="App-header">Learn React Testing</div>;
};

export default App;
