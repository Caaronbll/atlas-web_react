import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

import 'node-fetch';

export function login(email, password) {
    return {
        type: LOGIN,
        user: {
            email,
            password,
        },
    };
}

export const boundLogin = (email, password) => (dispatch(login(email, password)));

export function logout() {
    return {
        type: LOGOUT,
    };
}

export const boundLogout = () => (dispatch(logout()));

export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));
        return fetch("http://localhost:9000/login-success.json")
            .then((response) => response.json())
            .then((json) => dispatch(loginSuccess(json)))
            .catch((error) => dispatch(loginFailure(error)));
    };
};

export const loginSuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    };
};

export const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
    };
};

export function displayNotificationDrawer() {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
}

export const boundDisplayNotificationDrawer = () => (dispatch(displayNotificationDrawer()));

export function hideNotificationDrawer() {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    }
}

export const boundHideNotificationDrawer = () => (dispatch(hideNotificationDrawer()));