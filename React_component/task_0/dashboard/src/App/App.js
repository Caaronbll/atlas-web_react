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
  };
  static propTypes = {
    isLoggedIn: PropTypes.bool,
  }

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