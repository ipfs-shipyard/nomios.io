import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CheckGithub.module.css';

const CheckGithub = ({ className }) => (
    <div className={ classNames(styles.checkGithub, className) }>
        This is the check github!
    </div>
);

CheckGithub.propTypes = {
    className: PropTypes.string,
};

export default CheckGithub;
