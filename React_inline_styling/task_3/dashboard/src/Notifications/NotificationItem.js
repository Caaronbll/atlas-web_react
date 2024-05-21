import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;

    let Item;
    let typeStyle = css(type === 'urgent'? styles.urgent : styles.default);

    if (value) {
      Item = <li className={typeStyle} data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
    } else {
      Item = <li className={typeStyle} data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
    }

    return Item;
  }
}

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
  markAsRead: () => {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
}

const smallItem = {
  listStyle: 'none',
  borderBottom: '1px solid black',
  padding: '10px 8px',
  fontSize: '20px',
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    [screenSize.small]: smallItem
  },
  urgent: {
    color:'red',
    [screenSize.small]: smallItem
  },
});

export default NotificationItem;