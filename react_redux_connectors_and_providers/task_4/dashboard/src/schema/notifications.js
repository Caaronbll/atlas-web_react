import * as notificationInfo from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  const notifications = notificationInfo.entities.notifications;
  const messages = notificationInfo.entities.messages;

  const notificationsByUser = [];

  for (const property in notifications) {
    if (notifications[property].author === userId) {
      notificationsByUser.push(messages[notifications[property].context]);
    }
  }
  return notificationsByUser;
};

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const notificationsNormalizer = (data) => {
  const nData = normalize(data, [notification]);
  return nData.entities;
};

export default notificationsNormalizer