import React from "react";
import "./Header.css";
import former_holberton_logo from "../assets/holberton_logo.jpg";

function Header() {
    return (
      <header className="App-header">
        <img src={former_holberton_logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
    );
}

export default Header;