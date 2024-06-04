import notificationReducer, { initialState } from './notificationReducer';

import { Map, fromJS } from "immutable";

import notificationReducer, { initialState } from './notificationReducer';

import {
    FETCH_NOTIFICATIONS_SUCCESS,
    MARK_AS_READ,
    SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

import notificationsNormalizer from '../schema/notifications';

describe('notificationReducer', () => {
    it('should return the initial state', () => {
        expect(notificationReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
        const action = {
            type: FETCH_NOTIFICATIONS_SUCCESS,
            data: [
              {
                id: 1,
                type: "default",
                value: "New course available"
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available"
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available"
              }
            ]
        };
        const expectedState = {
            notifications: [
              {
                id: 1,
                type: "default",
                value: "New course available",
                isRead: false
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available",
                isRead: false
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available",
                isRead: false
              }
            ],
            filter: 'DEFAULT',
        };
        const state = notificationReducer(undefined, action);
        expect(state.toJS()).toEqual(expectedState);
    });

    it('should handle MARK_AS_READ', () => {
        const action = {
            type: MARK_AS_READ,
            index: 2,
        };

        const initialState = {
            notifications: [
              {
                id: 1,
                type: "default",
                value: "New course available",
                isRead: false
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available",
                isRead: false
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available",
                isRead: false
              }
            ],
            filter: 'DEFAULT',
        };

        const expectedState = {
            notifications: [
              {
                id: 1,
                type: "default",
                value: "New course available",
                isRead: false
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available",
                isRead: true
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available",
                isRead: false
              }
            ],
            filter: 'DEFAULT',
        };
        const state = notificationReducer(initialState, action);

        expect(state.toJS()).toEqual(expectedState);
    });

    it('should handle SET_TYPE_FILTER', () => {
        const action = {
            type: SET_TYPE_FILTER,
            filter: 'URGENT',
        };

        const initialState = {
            notifications: [
              {
                id: 1,
                type: "default",
                value: "New course available",
                isRead: false
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available",
                isRead: false
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available",
                isRead: false
              }
            ],
            filter: 'DEFAULT',
        };

        const expectedState = {
            notifications: [
              {
                id: 1,
                type: "default",
                value: "New course available",
                isRead: false
              },
              {
                id: 2,
                type: "urgent",
                value: "New resume available",
                isRead: false
              },
              {
                id: 3,
                type: "urgent",
                value: "New data available",
                isRead: false
              }
            ],
            filter: 'URGENT',
        };
        const state = notificationReducer(initialState, action);
        
        expect(state.toJS()).toEqual(expectedState);
    });
});