import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(undefined, action).toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
    const expectedState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    expect(uiReducer(initialState, action).toJS()).toEqual(expectedState.toJS());
  });
});