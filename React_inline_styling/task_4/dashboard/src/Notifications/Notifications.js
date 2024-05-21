// NOTIFICATIONS JS

import React, { Component } from "react";
import PropTypes from "prop-types";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from "aphrodite";



class Notifications extends Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.markAsRead = this.markAsRead.bind(this);
   }

   handleClick() {
      console.log('Close button has been clicked');
    }

    markAsRead(id) {
      console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
      return nextProps.listNotifications.length > this.props.listNotifications.length;
    }

    render() {
      const { displayDrawer, listNotifications } = this.props;

      const menuItemStyles = css(
        !displayDrawer ? styles.menuItemPShow : styles.menuItemPNone
      );

      return (
        <>
          <div className={css(styles.menuItem)}>
            <p className={menuItemStyles}>Your notifications</p>
          </div>
          {displayDrawer && (
            <div className={css(styles.notifications)}>
              <button 
                style={{ background: 'transparent', position: 'absolute', right: '15px', cursor: 'pointer', border: 'none'}} 
                aria-label="Close"
                onClick={this.handleClick}>
                <img src={closeIcon} alt="close-icon" className={css(styles.notificationButtonImg)} />
              </button>
              {listNotifications.length > 0 && (
                <p className={css(styles.notificationP)}>Here is the list of notifications</p>
              )}
              <ul className={css(styles.notificationsUL)}>
                {listNotifications.length === 0 && (
                  <NotificationItem value="No new notification for now" />
                )}
                {listNotifications.map(notification => (
                  <NotificationItem
                    key={notification.id}
                    html={notification.html}
                    type={notification.type}
                    value={notification.value}
                    markAsRead={this.markAsRead}
                    id={notification.id}
                  />
                ))}
              </ul>
            </div>
          )}
        </>
      );
    }

}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const fadeIn = {
  from: { opacity: 0.5 },
  to: { opacity: 1 },
}

const bounce = {
  '0%': { transform: 'translateY(-10px)' },
  '50%': { transform: 'translateY(10px)' },
  '100%': { transform: 'translateY(0)' },
}

const colors = {
  mainColor: '#e01d3f',
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
}

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
    ":hover": {
      cursor: 'pointer',
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
    }
  },

  menuItemPNone: {
    marginRight: "8px",
    display: 'none',
    [screenSize.small]: {
      display: 'none',
    },
  },

  menuItemPShow: {
    marginRight: "8px",
  },

  notifications: {
    float: 'right',
    border: `3px dashed #e01d3f`,
    padding: '10px',
    marginBottom: '20px',
    [screenSize.small]: {
      float: 'right',
      border: 'none',
      listStyle: 'none',
      padding: 0,
      fontSize: '20px',
      position: 'absolute',
      background: 'white',
      height: '110vh',
      width: '100vw',
    }
  },

  notificationButtonImg: {
    width: '10px',
  },

  notificationP: {
    margin: 0,
    marginTop: '15px',
  },

  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
    },
  },
});

export default Notifications;
