import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("App", () => {
  //doesnt crash
  test("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  //renders the header div
    test("renders the header div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("header.App-header").exists()).toBe(true);
  });
  //renders the main div
  test("renders the main div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("main.App-body").exists()).toBe(true);
  });
  //renders the footer div
    test("renders the footer div", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("footer.App-footer").exists()).toBe(true);
  });
});
