import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe("Notification action creators tests", () => {
    test("markAsRead action", () => {
        const expectedReturn = { type: MARK_AS_READ, index: 1 };
        const result = markAsRead(1);

        expect(result).toEqual(expectedReturn);
    });

    test("setNotificationFilter action", () => {
        const expectedReturn = { type: SET_TYPE_FILTER, filter: "DEFAULT" };
        const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

        expect(result).toEqual(expectedReturn);
    });
});