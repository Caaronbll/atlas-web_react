import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  //doesnt crash
  test("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
  //renders text
  test("renders text", () => {
    const text = "Copyright";
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes(text)).toBe(true);
  });
});