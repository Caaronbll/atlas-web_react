// immutable
import { Map } from 'immutable';

// import action types
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN,
    LOGOUT,
} from '../actions/uiActionTypes';

// define initial state
export const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
};

// create reducer function
const uiReducer = (state = Map(initialState), action) => {
    if (!Map.isMap(state)) {
        state = Map(state);
    }
    switch (action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);
        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);
        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);
        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);
        case LOGIN:
            return state.set('user', action.user);
        case LOGOUT:
            return state.set('isUserLoggedIn', false).set('user', null);
        default:
            break;
        }
    return state;
};

export default uiReducer;
