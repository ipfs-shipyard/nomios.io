import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CheckGithub.module.css';
import Button from '../../button';

const CheckGithub = ({ className }) => (
    <div className={ classNames(styles.checkGithub, className) }>
        This is the check github!
        <Button variant="primary" >PRIMARY</Button>
        <Button variant="secondary" >SECONDARY</Button>
        <Button variant="tertiary" >TERTIARY</Button>
    </div>
);

CheckGithub.propTypes = {
    className: PropTypes.string,
};

export default CheckGithub;
