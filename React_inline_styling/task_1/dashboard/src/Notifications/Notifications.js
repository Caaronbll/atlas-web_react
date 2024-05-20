// NOTIFICATIONS JS

import React, { Component } from "react";
import PropTypes from "prop-types";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';
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

      return (
        <>
          <div className={css(styles.menuItem)}>
            <p>Your notifications</p>
          </div>
          {displayDrawer && (
            <div className={css(styles.notifications)} id='Notifications'>
              <button 
                style={{ background: 'transparent', position: 'absolute', right: '15px', cursor: 'pointer', border: 'none'}} 
                aria-label="Close"
                onClick={this.handleClick}>
                <img src={closeIcon} alt="close-icon" className={css(styles.notificationButtonImg)} />
              </button>
              {listNotifications.length > 0 && (
                <p className={css(styles.notificationP)}>Here is the list of notifications</p>
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

const colors = {
  mainColor: '#e01d3f',
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right',
  },
  notifications: {
    float: 'right',
    border: `3px dashed #e01d3f`,
    padding: '10px',
    marginBottom: '20px',
  },

  notificationButtonImg: {
    width: '10px',
  },

  notificationP: {
    margin: 0,
    marginTop: '15px',
  },
});

export default Notifications;
