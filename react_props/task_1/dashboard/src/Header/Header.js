import React from "react";
import holberton_logo from "../assets/holberton_logo.jpg";
import "./Header.css";

function Header() {
    return (
      <header className="App-header">
        <img src={former_holberton_logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
    );
}
  
  export default Header;