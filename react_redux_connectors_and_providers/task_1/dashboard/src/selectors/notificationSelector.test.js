import { Map, fromJS } from 'immutable';

import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
} from './notificationSelector';

import notificationReducer, { initialState } from '../reducers/notificationReducer';

import notificationsNormalizer from '../schema/notifications';

describe('notificationSelector', () => {
    it('should return the correct filter type', () => {
        const state = notificationReducer(undefined, {});

        const selected = filterTypeSelected(state);

        expect(selected).toEqual(initialState.filter);
    });

    it('should return the correct notifications', () => {
        const state = {
            notifications: [
                {
                    id: 1,
                    value: 'New course available',
                    type: 'default',
                    isRead: false,
                },
                {
                    id: 2,
                    value: 'New resume available',
                    type: 'urgent',
                    isRead: false,
                },
                {
                    id: 3,
                    value: 'New data available',
                    type: 'urgent',
                    isRead: false,
                }
            ],
            filter: 'DEFAULT',
        };

        state.notifications = notificationsNormalizer(state.notifications).notifications;

        const testState = notificationReducer(fromJS(state), {});

        const selected = getNotifications(testState);

        expect(testState instanceof Map).toBe(true);
        expect(selected.toJS()).toEqual(notificationsNormalizer(state.notifications).notifications);
    });

    it('should return the correct unread notifications', () => {
        const state = {
            notifications: [
                {
                    id: 1,
                    value: 'New course available',
                    type: 'default',
                    isRead: false,
                },
                {
                    id: 2,
                    value: 'New resume available',
                    type: 'urgent',
                    isRead: false,
                },
                {
                    id: 3,
                    value: 'New data available',
                    type: 'urgent',
                    isRead: true,
                },
            ],
            filter: 'DEFAULT',
        };

        const expected = [
            {
                id: 3,
                value: 'New data available',
                type: 'urgent',
                isRead: true,
            }
        ];

        state.notifications = notificationsNormalizer(state.notifications).notifications;

        const testState = notificationReducer(fromJS(state), {});

        const selected = getUnreadNotifications(testState);

        expect(testState instanceof Map).toEqual(true);
        expect(selected.toJS()).toEqual(notificationsNormalizer(expected).notifications);
    });

});