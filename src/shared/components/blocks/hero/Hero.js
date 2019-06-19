import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Svg from '../../svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import lowpolySvg from '../../../media/illustrations/illustration-lowpoly-face.svg';
import styles from './Hero.module.css';

const Hero = ({ className }) => (
    <div className={ classNames(styles.hero, className) }>
        <div className={ styles.textWrapper } >
            <h1>Open.<br />Decentralised.<br />Standard.</h1>
        </div>
        <Svg className={ styles.svgWrapper } svg={ lowpolySvg } />

        <AnchorLink offset={ 79 } href="#why">
            <div className={ styles.visionBox }>
                <span className={ styles.vision } >
                        Vision
                    <svg height="50px" className={ styles.scrollHint }>
                        <path strokeWidth="2px" d="M0,50v-50" />
                    </svg>
                </span>
            </div>
        </AnchorLink>
    </div>
);

Hero.propTypes = {
    className: PropTypes.string,
};

export default Hero;
