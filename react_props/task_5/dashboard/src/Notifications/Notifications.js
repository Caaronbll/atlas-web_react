// NOTIFICATIONS JS

import React from "react";
import PropTypes from "prop-types";
import "./Notifications.css";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
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
        {listNotifications.length > 0 && (
          <p>Here is the list of notifications</p>
        )}
        <ul>
          {listNotifications.length === 0 && (
            <NotificationItem value="No new notification for now" />
          )}
          {listNotifications.map(notification => (
            <NotificationItem
              key={notification.id}
              html={notification.html}
              type={notification.type}
              value={notification.value}
            />
          ))}
        </ul>
      </div>
      )}
    </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
