import React from'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let element;

    if (isHeader === true) {
        if (textSecondCell === null) {
            element = <th colSpan="2">{textFirstCell}</th>
        } else {
            element = (
                <>
                  <th>{textFirstCell}</th>
                  <th>{textSecondCell}</th>
                </>
            );
        }
    } else {
        element = (
            <>
              <td>{textFirstCell}</td>
              <td>{textSecondCell}</td>
            </>
        );
    }
    return (
        <tr>{element}</tr>
    );
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

export default CourseListRow;