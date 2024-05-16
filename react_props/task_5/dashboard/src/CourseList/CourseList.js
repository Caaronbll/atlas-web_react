import React from'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import "./CourseList.css";
import CourseShape from './CourseShape';

function CourseList({ listCourses }) {
    return (
        <table id="CourseList">
            <thead>
                <CourseListRow isHeader={true} textFirstCell="Available Courses" />
                <CourseListRow isHeader={true} textFirstCell="Course Name" textSecondCell="Credit" />
            </thead>
            <tbody>
                {listCourses.length === 0 && (
                    <CourseListRow isHeader={false} textFirstCell="No course available yet" />
                )}
                {listCourses.map(course => (
                    <CourseListRow isHeader={false} key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />
                ))}
            </tbody>
        </table>
    );
}

CourseList.defaultProps = {
    listCourses: [],
};

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;