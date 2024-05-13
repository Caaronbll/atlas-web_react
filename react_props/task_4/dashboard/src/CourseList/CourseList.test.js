import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";

describe("CourseList", () => {
    // renders correctly
  test("should render correctly", () => {
    const wrapper = shallow(<CourseList />);
    wrapper.update();
    expect(wrapper.find("table").length).toEqual(1);
  });
  // renders all 5 rows
  test("should render correctly", () => {
    const wrapper = shallow(<CourseList />);
    wrapper.update();
    let item = wrapper.find("CourseListRow");
    expect(item).toHaveLength(5);
  });
});