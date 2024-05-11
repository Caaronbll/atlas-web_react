import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications", () => {
    // doesnt crash
    test("renders without crashing", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.exists()).toBe(true);
    });
    // renders items
  test("renders items", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("li")).toHaveLength(3);
  });
  // renders text
  test("renders text", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find(".Notifications p").text()).toBe(text);
  });
});
