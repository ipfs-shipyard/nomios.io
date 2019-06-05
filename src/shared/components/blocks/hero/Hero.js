import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Svg from '../../svg';
import lowpolySvg from '../../../media/illustrations/illustration-lowpoly-face.svg';
import styles from './Hero.module.css';

const Hero = ({ className }) => (
    <div className={ classNames(styles.hero, className) }>
        <div className={ styles.textWrapper } >
            <h1>Open.<br />Decentralised.<br />Standard.</h1>
        </div>
        <Svg className={ styles.svgWrapper } svg={ lowpolySvg } />

        <label className={ styles.vision } >
        Vision
            <span className={ styles.scrollHint } />
        </label>
    </div>
);

Hero.propTypes = {
    className: PropTypes.string,
};

export default Hero;
