import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './SideBySide.module.css';

const SideBySide = ({ left, right, className }) => (
    <div className={ classNames(styles.sideBySide, className) }>
        { cloneElement(left, {
            className: classNames(styles.left, left.props.className),
            ...left.props,
        }) }
        { cloneElement(right, {
            className: classNames(styles.right, right.props.className),
            ...right.props,
        }) }
    </div>
);

SideBySide.propTypes = {
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired,
    className: PropTypes.string,
};

export default SideBySide;
