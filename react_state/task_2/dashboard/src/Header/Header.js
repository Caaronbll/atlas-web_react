// HEADER JS

import React, { Component } from "react";
import former_holberton_logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { user, logOut} = this.context;

    return (
      <header className={css(styles.header)}>
        <img src={former_holberton_logo} alt="Holberton Logo" className={css(styles.headerImg)} />
        <h1>School dashboard</h1>

        {user.isLoggedIn && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            welcome <b>{`${user.email}`}</b>
            <span className={css(styles.logoutSectionSpan)} onClick={logOut}>
              (logout)
            </span>
          </p>
        )}
      </header>
    );
  }
}

const colors = {
  color: '#e01d3f',
};

const styles = StyleSheet.create({
  header: {
    color: colors.color,
    fontFamily: 'Arial',
    fontSize: '20px',
    alignItems: 'center',
    display: 'flex',
    borderBottom: `3px solid ${colors.color}`,
  },

  headerImg: {
    width: '200px',
  },
  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
  },
  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  }
});

Header.contextType = AppContext;

export default Header;