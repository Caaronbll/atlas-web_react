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


class App extends Component {
  // Props
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {},
  };
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func,
  }

  componentDidMount() {
    // Add event listener for keydown event
    document.addEventListener("keydown", this.handleKeyDown);
  };

  componentWillUnmount() {
    // Remove event listener when component is unmounted
    document.removeEventListener("keydown", this.handleKeyDown);
  };

  // Event handler for keydown event
  handleKeyDown = (event) => {
    // Check if Ctrl key and 'h' key are pressed simultaneously
    if (event.ctrlKey && event.key === "h") {
      // Display alert and call logOut function
      alert("Logging you out");
      this.props.logOut();
    }
  };



  render() {
    // Courses
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    // Notifications
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];

    return (
      <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className={css(styles.constainer)}>
        <div className={css(styles.app)}>
        <Header />
        </div>
        <div className={css(styles.body)}>
          {!this.props.isLoggedIn
           ? 
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
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
    </React.Fragment>
    );
  };

}

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