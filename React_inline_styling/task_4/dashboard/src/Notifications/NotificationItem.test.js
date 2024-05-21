import { shallow } from 'enzyme';
import React from'react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  // doesnt crash
  test("renders without crashing", () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });
  // dummy type and value props
  test ("dummy props", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />)
    wrapper.update();
    const Item = wrapper.find("li");

    expect(Item).toHaveLength(1);
    expect(Item.text()).toBe("test");
    expect(Item.prop("data-notification-type")).toBe("default");
  });
  // renders html
  it('renders correct html from html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});