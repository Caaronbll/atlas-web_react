import React, { useState } from'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

const rowStyle = { backgroundColor: '#f5f5f5ab'};
const headerRowStyle = { backgroundColor: '#deb5b545'};

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
    let element;
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const tableItemStyle = css(
        isHeader ? styles.courseListTh : styles.courseListTd,
        isChecked && styles.rowChecked
    );

    if (isHeader === true) {
        if (textSecondCell === null) {
            element = <th colSpan="2" className={css(styles.CourseListThSpan2)}>{textFirstCell}</th>
        } else {
            element = (
                <>
                  <th className={tableItemStyle}>{textFirstCell}</th>
                  <th className={tableItemStyle}>{textSecondCell}</th>
                </>
            );
        }
    } else {
        element = (
            <>
              <td className={tableItemStyle}>
                <input type='checkbox' onClick={handleCheckbox}></input>
                {textFirstCell}</td>
              <td className={tableItemStyle}>{textSecondCell}</td>
            </>
        );
    }

    let styling = isHeader? headerRowStyle : rowStyle;
    return (
        <tr style={styling}>{element}</tr>
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

const colors = {
    tableBorder: "rgb(170, 170, 170)",
};

const styles = StyleSheet.create({
    courseListTh: {
        borderTop: `1px solid ${colors.tableBorder}`,
        borderBottom: `1px solid ${colors.tableBorder}`,
        textAlign: 'left',
        fontSize: '18px',
    },
    CourseListThSpan2: {
        textAlign: 'center',
    },
    CourseListTd: {
        textAlign: 'left',
    },
    rowChecked: {
        backgroundColor: '#e6e4e4',
    },
}); 

export default CourseListRow;