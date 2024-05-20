import React, { Component } from'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ...props } = this.props;

        return (
            <div className={css(styles.bodySectionWithMarginBottom)}>
                <BodySection {...props} />
            </div>
        );
    }
}

BodySectionWithMarginBottom.defaultProps = {
    title: '',
};

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

const styles = StyleSheet.create({
    bodySectionWithMarginBottom: {
        marginBottom: '40px',
        width: '100%',
    },
});

export default BodySectionWithMarginBottom;
