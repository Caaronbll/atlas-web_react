// APP JS

import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";
import BodySection from "../BodySection/BodySection";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import { StyleSheet, css } from "aphrodite";
import { user, logOut } from "./AppContext";
import AppContext from "./AppContext";


// Initializing Courses and Notifications
const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
];

// Initializing App Class
class App extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
    };
  }

  // App Props
  static defaultProps = {};
  static propTypes = {};

  // App Methods
  logIn(email, password) {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }
  logOut() {
    this.setState({ user });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  };
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  };
  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.state.logOut();
    }
  };

  // App Render
  render() {
    const {
      user,
      user: { isLoggedIn },
      logOut,
      displayDrawer,
    } = this.state;

    const value = { user, logOut };

    return (
      <AppContext.Provider value={value}>
      <Notifications listNotifications={listNotifications}
      displayDrawer={displayDrawer}
      handleDisplayDrawer={this.handleDisplayDrawer}
      handleHideDrawer={this.handleHideDrawer}/>
      <div className={css(styles.constainer)}>
        <div className={css(styles.app)}>
         <Header />
        </div>
        <div className={css(styles.body)}>
          {!isLoggedIn
           ? 
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={this.logIn} />
          </BodySectionWithMarginBottom>
           : 
          <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>}
        </div>
        <BodySection title="News from the School">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor risus, vulputate eu ipsum eu, faucibus sollicitudin justo. Cras congue, ipsum ac blandit congue, ipsum nulla mollis diam, eu semper diam tellus at mauris. Pellentesque interdum turpis non odio posuere, vel faucibus turpis tincidunt. Vivamus porta est ipsum. In hac habitasse platea dictumst. Vivamus bibendum odio sit amet arcu eleifend, volutpat semper turpis efficitur. Suspendisse potenti. Suspendisse sed hendrerit dui. Nam et justo ut mauris ultrices mattis. Vivamus eleifend urna et odio tincidunt malesuada. Sed finibus lorem sit amet porttitor convallis. Etiam facilisis condimentum augue nec iaculis. Aliquam condimentum placerat nisl, sed sodales ligula rutrum at. Duis congue massa nec condimentum ultricies. Aenean commodo facilisis ipsum vitae lobortis. Curabitur faucibus pretium accumsan.
          </p>
        </BodySection>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
        </div>
    </AppContext.Provider>
    );
  };

}

// App CSS
const colors = {
  mainColor: "#e01d3f",
}

const screenSize = {
  small: "@media (max-width: 900px)",
}

const styles = StyleSheet.create({
  app: {
    borderBottom: `3px solid ${colors.mainColor}`,
  },

  constainer: {
    width: "calc(100% - 16px)",
    marginLeft: "8px",
    marginRight: "8px",
  },

  body: {
    display: "flex",
    justifyContent: "center",
  },

  footer: {
    borderTop: `3px solid ${colors.mainColor}`,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    bottom: 0,
    fontStyle: "italic",
    backgroundColor: "white",
    position: "fixed",
    [screenSize.small]: {
      position: "static",
    },
  },
});

export default App;