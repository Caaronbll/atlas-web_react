import * as notificationInfo from '../../notifications.json';
import { normalize, schema } from 'normalizr';

export function getAllNotificationsByUser(userId) {
  return notificationInfo.default.filter(
    notification => notification.author.id === userId
  ).map(({context}) => context);
};

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  message: message,
});

const normalizedData = normalize(notificationInfo.default, [notification]);

export { normalizedData };