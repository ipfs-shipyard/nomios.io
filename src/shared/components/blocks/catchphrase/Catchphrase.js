import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Catchphrase.module.css';

const Catchphrase = ({ className }) => (
    <div className={ classNames(styles.catchphrase, className) }>
        This is the catchphrase!
    </div>
);

Catchphrase.propTypes = {
    className: PropTypes.string,
};

export default Catchphrase;
