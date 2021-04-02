import React, { useState } from "react";
import "../src/App.css";

export const add = (a, b) => a + b;

export const total = (tax, amt) => `$${add(tax, amt)}`;

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState("");

  const save = (e) => {
    e.preventDefault();
    setTodoList([...todoList, input]);
    setInput("");
  };

  return (
    <div className="App-header">
      <h1>Learn React Testing</h1>
      {todoList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <form onSubmit={save}>
        <label htmlFor="name">Enter Name</label>
        <input
          id="name"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button id="btn" type="submit">
          Enter Item {todoList.length + 1}
        </button>
      </form>
    </div>
  );
};

export default App;
