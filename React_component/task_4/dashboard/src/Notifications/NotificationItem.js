// NOTIFICATION ITEM JS

import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value, markAsRead, id }) {
    let Item;

    if (value) {
      Item = <li data-notification-type={type} onClick={() => markAsRead(id)}>{value}</li>;
    } else {
      Item = <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}></li>;
    }
    return Item;
};

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

export default NotificationItem;