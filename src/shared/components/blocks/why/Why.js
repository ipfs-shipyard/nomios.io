import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Why.module.css';

const Why = ({ className }) => (
    <div className={ classNames(styles.why, className) }>
        This is the why!
    </div>
);

Why.propTypes = {
    className: PropTypes.string,
};

export default Why;
