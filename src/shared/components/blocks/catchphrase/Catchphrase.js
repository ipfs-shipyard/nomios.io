import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { throttle } from 'lodash';
import { offset } from 'tiny-dom-helpers';
import Observer from '@researchgate/react-intersection-observer';
import { LayoutContainer } from '../../layout';
import { HEADER_HEIGHT_SMALL } from '../../header';
import styles from './Catchphrase.module.css';

const BREAKPOINT = 768;

class Catchphrase extends Component {
    wrapperRef = createRef();

    windowSize = undefined;
    wrapperSize = undefined;
    wrapperOffsetTop = undefined;
    intersecting = false;

    state = {
        percentage: 0,
    };

    componentDidMount() {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.handleResize, { passive: true });
            window.addEventListener('scroll', this.handleScroll, { passive: true });

            this.updateDimensions();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, { passive: true });
        window.removeEventListener('scroll', this.handleScroll, { passive: true });
    }

    render() {
        const { className } = this.props;

        return (
            <LayoutContainer
                id="catchphraseContainer"
                className={ classNames(styles.catchphrase, className) }
                contentClassName={ styles.catchphraseContent }>
                <Observer onChange={ this.handleIntersect }>
                    <div className={ styles.wrapper } ref={ this.wrapperRef }>
                        <div className={ classNames(styles.linesWrapper, styles.animated) }>
                            <span
                                style={ { transform: this.calculateLeftTransform() } }
                                className={ styles.firstLine }>
                                An interoperable world.
                            </span>
                            <span
                                style={ { transform: this.calculateRightTransform() } }
                                className={ styles.secondLine }>
                                Open, but under your control.
                            </span>
                        </div>

                        <div className={ classNames(styles.linesWrapper, styles.nonAnimated) }>
                            An interoperable world. Open, but under your control.
                        </div>
                    </div>
                </Observer>
            </LayoutContainer>
        );
    }

    updateDimensions = () => {
        this.windowSize = { width: window.innerWidth, height: window.innerHeight };
        this.wrapperSize = { width: this.wrapperRef.current.offsetWidth, height: this.wrapperRef.current.offsetHeight };
        this.wrapperOffsetTop = offset(this.wrapperRef.current).top;

        this.updatePercentage();
    };

    updatePercentage = () => {
        if (this.windowSize.width <= BREAKPOINT) {
            return;
        }

        const scrollTop = document.scrollingElement.scrollTop;

        const distance = this.windowSize.height + this.wrapperSize.height - HEADER_HEIGHT_SMALL;
        const elementVisibility = scrollTop + this.windowSize.height - this.wrapperOffsetTop;
        const unboundPercentage = (elementVisibility) / distance;
        const percentage = Math.min(Math.max(0, unboundPercentage), 1);

        this.setState({
            percentage,
        });
    };

    calculateLeftTransform = () => {
        if (!this.wrapperRef.current) {
            return;
        }

        const elementWidth = this.wrapperRef.current.offsetWidth;

        return `translateX(calc(${elementWidth * this.state.percentage}px - 50%))`;
    };

    calculateRightTransform = () => {
        if (!this.wrapperRef.current) {
            return;
        }

        const elementWidth = this.wrapperRef.current.offsetWidth;

        return `translateX(calc(${elementWidth - (elementWidth * this.state.percentage)}px - 50%))`;
    };

    handleScroll = () => {
        if (this.intersecting) {
            this.updatePercentage();
        }
    };

    handleResize = throttle(() => this.updateDimensions(), 250);

    handleIntersect = ({ isIntersecting }) => {
        this.intersecting = isIntersecting;
    };
}

Catchphrase.propTypes = {
    className: PropTypes.string,
};

export default Catchphrase;
