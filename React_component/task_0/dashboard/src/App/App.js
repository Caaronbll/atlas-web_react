import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Login from "../Login/Login"
import Notifications from "../Notifications/Notifications"
import PropTypes from "prop-types";
import CourseList from "../CourseList/CourseList";
import "./App.css";

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications />
        <div className="App">
          <Header />
        </div>
        <div className="App-body">{!isLoggedIn ? <Login /> : <CourseList />}</div>
        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;