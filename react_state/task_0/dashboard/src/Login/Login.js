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
          <input type="email" id="email" name="email" className={css(styles.loginInput)} />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" className={css(styles.loginInput)} />
          <button>OK</button>
        </div>
      </div>
    </React.Fragment>
  );
}

const screenSize = {
  small: "@media (max-width: 900px)",
}

const styles = StyleSheet.create({
  login: {
    margin: '50px',
    flexGrow: 1,
    [screenSize.small]: {
      margin: '10px',
      marginLeft: '10px',
      marginRight: '0px',
      marginBottom: '0px',
    },
  },

  loginInput: {
    marginLeft: '10px',
    marginRight: '20px',
    [screenSize.small]: {
      display: 'block',
      marginLeft: '0px',
      marginTop: '10px',
      marginBottom: '10px',
    },
  },
});

export default Login;