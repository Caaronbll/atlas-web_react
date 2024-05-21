import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import { StyleSheetTestUtils } from "aphrodite";

describe("Notifications", () => {
  beforeAll(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    afterAll(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    // doesnt crash
    test("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    /*
    // renders items
  test("renders items", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
  });
  // renders text
  test("renders text", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find(".Notifications p").text()).toBe(text);
  });
  */
});
