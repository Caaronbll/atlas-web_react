import React, { Component } from'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMargin.css';

class BodySectionWithMarginBottom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ...props } = this.props;

        return (
            <div className='bodySectionWithMarginBottom'>
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

export default BodySectionWithMarginBottom;
