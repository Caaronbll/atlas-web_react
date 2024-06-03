import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";

describe("UI action tests", () => {
    test("Login action", () => {
        const user = { email: "test@test", password: "test" };
        const expectedReturn = { type: LOGIN, user };
        const result = login(user.email, user.password);

        expect(result).toEqual(expectedReturn);
    });
    test("Logout action", () => {
        const expectedReturn = { type: LOGOUT };
        const result = logout();

        expect(result).toEqual(expectedReturn);
    });
    test("Display notification drawer action", () => {
        const expectedReturn = { type: DISPLAY_NOTIFICATION_DRAWER };
        const result = displayNotificationDrawer();

        expect(result).toEqual(expectedReturn);
    });
    test("Hide notification drawer action", () => {
        const expectedReturn = { type: HIDE_NOTIFICATION_DRAWER };
        const result = hideNotificationDrawer();

        expect(result).toEqual(expectedReturn);
    });
});