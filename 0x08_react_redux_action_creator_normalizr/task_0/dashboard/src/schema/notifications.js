import * as notificationInfo from '../../notifications.json';

export function getAllNotificationsByUser(userId) {
  return notificationInfo.default.filter(
    notification => notification.author.id === userId
  ).map(({context}) => context);
};