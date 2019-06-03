import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Footer.module.css';

const Footer = ({ className }) => (
    <div className={ classNames(styles.footer, className) }>
        This is the footer!
    </div>
);

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
