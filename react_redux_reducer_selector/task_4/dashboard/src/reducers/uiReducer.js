// immutable
import { Map } from 'immutable';

// import action types
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from '../actions/uiActionTypes';

// define initial state
const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
});

// create reducer function
const uiReducer = (state = initialState, action) => {
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
        case LOGOUT:
            return state.set('isUserLoggedIn', false);
        default:
            return state;
        }
};

export default uiReducer;
