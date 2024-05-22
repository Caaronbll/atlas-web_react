import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

describe("Header", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  //doesnt crash
  test("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  //renders h1 and img tags
  test("renders h1 and img tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").exists()).toBe(true);
    expect(wrapper.find("img").exists()).toBe(true);
  });
});