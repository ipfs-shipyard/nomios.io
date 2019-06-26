import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Svg from '../../svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import lowpolySvg from '../../../media/illustrations/illustration-lowpoly-face.svg';
import styles from './Hero.module.css';

const HEADER_OFFSET = 79;

class Hero extends Component {
    state = {
        offset: typeof window !== 'undefined' && window.innerWidth <= 1024 ? 0 : HEADER_OFFSET,
    };

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.updateWindowDimensions);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        const { offset } = this.state;
        const { className } = this.props;

        return (
            <div className={ classNames(styles.hero, className) }>
                <div className={ styles.textWrapper } >
                    <h1>Open.<br />Decentralized.<br />Standard.</h1>
                </div>
                <Svg className={ styles.svgWrapper } svg={ lowpolySvg } />

                <AnchorLink offset={ offset } href="#why">
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
    }

    updateWindowDimensions = () => {
        const { offset } = this.state;

        offset === HEADER_OFFSET && window.innerWidth <= 1024 && this.setState({ offset: 0 });
        offset === 0 && window.innerWidth > 1024 && this.setState({ offset: HEADER_OFFSET });
    };
}

Hero.propTypes = {
    className: PropTypes.string,
};

export default Hero;
