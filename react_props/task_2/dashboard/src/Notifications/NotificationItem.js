// NOTIFICATION ITEM JS

import React from "react";

function NotificationItem({ type, html, value }) {
    let Item;

    if (value) {
      Item = <li data-notification-type={type}>{value}</li>;
    } else {
      Item = <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
    }
    return Item;
};

export default NotificationItem;