// NOTIFICATION ITEM JS

import React from "react";
import PropTypes from "prop-types";

function NotificationItem({ type, html, value }) {
    let Item;

    if (value) {
      Item = <li data-notification-type={type}>{value}</li>;
    } else {
      Item = <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
    }
    return Item;
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  })
};

export default NotificationItem;