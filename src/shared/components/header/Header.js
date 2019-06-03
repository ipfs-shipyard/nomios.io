import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.css';

const Header = ({ className }) => (
    <div className={ classNames(styles.header, className) }>
        This is the header!
    </div>
);

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
