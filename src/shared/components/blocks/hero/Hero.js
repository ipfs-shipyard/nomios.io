import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { throttle } from 'lodash';
import Svg from '../../svg';
import lowpolySvg from '../../../media/illustrations/illustration-lowpoly-face.svg';
import styles from './Hero.module.css';

const HEADER_OFFSET = 79;
const MAX_ROTATION = 2;

class Hero extends Component {
    windowSize = null;
    wrapperSize = null;
    wrapperRef = React.createRef();

    state = {
        offset: typeof window !== 'undefined' && window.innerWidth <= 1024 ? 0 : HEADER_OFFSET,
        rotX: 0,
        rotY: 0,
    };

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.updateWindowDimensions);
        }
        this.updateWindowDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        const { offset, rotX, rotY } = this.state;
        const { className } = this.props;

        const transformation = `rotate3d(1,0,0,${rotY}deg) rotate3d(0,1,0,${rotX}deg)`;

        return (
            <div
                className={ classNames(styles.hero, className) }
                onMouseMove={ this.handleMouseMove }
                ref={ this.wrapperRef }>
                <div className={ styles.textWrapper } >
                    <h1>Open.<br />Decentralized.<br />Standard.</h1>
                </div>
                <div className={ styles.threeDWrapper }>
                    <div className={ styles.svgWrapper } style={ { transform: transformation } }>
                        <Svg svg={ lowpolySvg } />
                    </div>
                </div>

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

        this.windowSize = { width: window.innerWidth, height: window.innerHeight };
        this.wrapperSize = {
            width: this.wrapperRef.current.offsetWidth,
            height: this.wrapperRef.current.offsetHeight,
            halfWidth: this.wrapperRef.current.offsetWidth / 2,
            halfHeight: this.wrapperRef.current.offsetHeight / 2,
        };
    };

    updateHeadTransformation(mouseX, mouseY) {
        const toCenterX = mouseX - this.wrapperSize.halfWidth;
        const toCenterY = mouseY - this.wrapperSize.halfHeight;

        const rotPercentageX = toCenterX / this.wrapperSize.halfWidth;
        const rotPercentageY = 0 - (toCenterY / this.wrapperSize.halfHeight);

        this.setState({
            rotX: rotPercentageX * MAX_ROTATION,
            rotY: rotPercentageY * MAX_ROTATION,
        });
    }

    handleMouseMove = (event) => {
        this.updateHeadTransformation(event.clientX, event.clientY);
    };

    handleResize = throttle(() => this.updateDimensions(), 250);
}

Hero.propTypes = {
    className: PropTypes.string,
};

export default Hero;
