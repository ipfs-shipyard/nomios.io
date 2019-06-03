import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CheckWorkshop.module.css';

const CheckWorkshop = ({ className }) => (
    <div className={ classNames(styles.checkWorkshop, className) }>
        This is the check workshop!
    </div>
);

CheckWorkshop.propTypes = {
    className: PropTypes.string,
};

export default CheckWorkshop;
