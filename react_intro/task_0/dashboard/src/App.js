import React from "react";
import "./App.css";
import former_holberton_logo from "./holberton_logo.jpg";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={former_holberton_logo} alt='Holberton_logo' />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </div>
  );
}

export default App;
