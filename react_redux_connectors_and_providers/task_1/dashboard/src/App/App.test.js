import { shallow, mount } from "enzyme";
import React from "react";
import App, { listNotifications, mapStateToProps } from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import AppContext, { user, logOut } from "./AppContext";
import { Provider } from "react-redux";
import { createStore } from "redux";
import uiReducer, { initialState } from "./App/reducers/uiReducer";
import { fromJS } from "immutable";



describe("App", () => {
    it('returns correct object', () => {
        let state = fromJS({
          isUserLoggedIn: true,
        })
        const returnedObject = mapStateToProps(state);

        expect(returnedObject).toEqual({
            isUserLoggedIn: true,
        });
    });

    it('displays correct component', () => {
        let state = fromJS({
          isNotificationDrawerVisable: true,
        });

        const returnedObject = mapStateToProps(state);

        expect(returnedObject).toEqual({ displayDrawer: true });
    });
});