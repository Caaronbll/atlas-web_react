import { shallow } from "enzyme";
import React from "react";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";

describe("App", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  //doesnt crash
  test("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  //renders notifications
  test("renders notifications", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });
  //renders header
  test("renders header", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });
  //renders login
  test("renders login", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(1);
  });
  //renders footer
  test("renders footer", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
});
