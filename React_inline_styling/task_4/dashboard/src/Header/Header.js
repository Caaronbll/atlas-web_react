// HEADER JS

import React from "react";
import former_holberton_logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <header className={css(styles.header)}>
      <img src={former_holberton_logo} alt="Holberton Logo" className={css(styles.headerImg)} />
      <h1>School dashboard</h1>
    </header>
  );
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
});

export default Header;