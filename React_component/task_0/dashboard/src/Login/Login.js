// LOGIN JS

import React from "react";
import "./Login.css";

function Login() {
  return (
    <React.Fragment>
      <div className="App-login">
        <p>Login to access the full dashboard</p>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;