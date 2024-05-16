// APP JS

import React, { Component } from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import { getLatestNotification } from "../utils/utils";

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
      <div className="App">
        <Header />
        </div>
        <div className="App-body">
          {!this.props.isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
    </React.Fragment>
    );
  };

}

export default App;