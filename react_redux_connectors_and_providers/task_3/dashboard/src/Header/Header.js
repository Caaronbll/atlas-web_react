// HEADER JS

import React, { Component } from "react";
import former_holberton_logo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { connect } from "react-redux";


export class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { user, logOut} = this.props;

    return (
      <header className={css(styles.header)}>
        <img src={former_holberton_logo} alt="Holberton Logo" className={css(styles.headerImg)} />
        <h1>School dashboard</h1>

        {user && (
          <p id="logoutSection" className={css(styles.logoutSection)}>
            welcome <b>{`${user.email}`} </b>
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

Header.defaultProps = {
  user: null,
  logOut: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Header);