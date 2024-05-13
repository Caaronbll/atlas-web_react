// NOTIFICATIONS JS

import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications" style={{ position: 'relative', padding: '10px', marginBottom: '20px' }}>
        <button 
          style={{ background: 'transparent', position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', border: 'none'}} 
          aria-label="Close"
          onClick={handleClick}>
          <img src={closeIcon} alt="close-icon" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
        </ul>
      </div>
      )}
    </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
