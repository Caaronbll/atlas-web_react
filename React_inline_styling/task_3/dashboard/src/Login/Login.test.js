import { shallow } from "enzyme";
import React from "react";
import Login from "./Login";
import { StyleSheetTestUtils } from "aphrodite";

describe("Login", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  //doesnt crash
  test("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
  //renders input and label tags
  test("renders input and label tags", () => {
    const wrapper = shallow(<Login />);
    wrapper.update();
    expect(wrapper.find("input")).toHaveLength(2);
    expect(wrapper.find("label")).toHaveLength(2);
  });
});