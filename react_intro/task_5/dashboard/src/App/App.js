import React from "react";
import "./App.css";
import former_holberton_logo from "../assets/holberton_logo.jpg";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={former_holberton_logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </main>
      <footer className="App-footer">
        <p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
