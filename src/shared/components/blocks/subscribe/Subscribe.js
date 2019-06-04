import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Subscribe.module.css';

const Subscribe = ({ className }) => (
    <div id="subscribe" className={ classNames(styles.subscribe, className) }>
        This is the subscribe!
    </div>
);

Subscribe.propTypes = {
    className: PropTypes.string,
};

export default Subscribe;
