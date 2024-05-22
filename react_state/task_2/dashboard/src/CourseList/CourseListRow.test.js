import { shallow } from 'enzyme';
import React from 'react';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
    // first cell and true
    test('should render correctly', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" />);
        wrapper.update();
        expect(wrapper.find('th').first().prop('colSpan')).toBe("2");
    });
    // both cells and true
    test('should render correctly', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test1" textSecondCell="test2" />)
        wrapper.update();
        expect(wrapper.find('th').length).toEqual(2);
    });
    // header is false
    test('should render correctly', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test1" textSecondCell="test2" />)
        wrapper.update();
        expect(wrapper.find('td').length).toEqual(2);
    });
});