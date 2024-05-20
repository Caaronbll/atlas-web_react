// LOGIN JS

import React from "react";
import { StyleSheet, css } from "aphrodite";

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.login)}>
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

const styles = StyleSheet.create({
  login: {
    margin: '50px',
    flexGrow: 1,
  },

  loginInput: {
    marginLeft: '10px',
    marginRight: '20px',
  },
});

export default Login;