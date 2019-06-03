import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Hero.module.css';

const Hero = ({ className }) => (
    <div className={ classNames(styles.hero, className) }>
        This is the hero!
    </div>
);

Hero.propTypes = {
    className: PropTypes.string,
};

export default Hero;
