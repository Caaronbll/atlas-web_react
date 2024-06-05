import React from'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';



function CourseList({ listCourses }) {
    return (
        <table id="CourseList" className={css(styles.courseList)}>
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

const colors = {
    tableBorder: "rgb(170, 170, 170)",
};

const styles = StyleSheet.create({
    list: {
        border: `1px solid ${colors.tableBorder}`,
        width: "90%",
        borderCollapse: "collapse",
        margin: "40px auto 0 auto",
    },
});

export default CourseList;