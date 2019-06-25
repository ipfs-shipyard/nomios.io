import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { throttle } from 'lodash';
import styles from './Catchphrase.module.css';

class Catchphrase extends Component {
    isGoingDown = undefined;
    maxLeftTransform = -100;
    maxRightTransform = 0;
    translateSteps = 1.2;

    state = {
        translateValue: 0,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { className } = this.props;
        const { translateValue } = this.state;

        const applyClassNames = classNames(
            styles.scrollable,
        );

        const applyStyles = {
            transform: `translate3d(${translateValue}%, -50%, 0)`,
        };

        return (
            <div id="catchphraseContainer" className={ classNames(styles.catchphrase, className) }>
                <div className={ styles.catchphraseWrapper }>
                    <div className={ styles.blackScreen }>
                        <div className={ applyClassNames } style={ applyStyles } >
                            <h2> An interoperable world. Open, but under your control.</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Throttle handle scroll function to improve performance
    handleScroll = throttle(() => {
        const { translateValue } = this.state;

        const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const container = document.getElementById('catchphraseContainer');
        const top = container.getBoundingClientRect().top;
        const offset = windowHeight - top;

        if (this.lastScroll < window.scrollY) {
            this.isGoingDown = true;
        } else {
            this.isGoingDown = false;
        }
        this.lastScroll = window.scrollY;

        const shouldAnimate = (offset >= 0 && offset <= container.clientHeight + container.clientHeight);

        if (!shouldAnimate) {
            offset > container.clientHeight && this.setState({
                translateValue: this.maxLeftTransform,
            });
            offset < container.clientHeight && this.setState({
                translateValue: this.maxRightTransform,
            });
        }

        if (shouldAnimate) {
            this.setState({
                translateValue: this.isGoingDown ?
                    Math.max(this.maxLeftTransform, translateValue - this.translateSteps) :
                    Math.min(this.maxRightTransform, translateValue + this.translateSteps),
            });
        }
    }, 10);
}

Catchphrase.propTypes = {
    className: PropTypes.string,
};

export default Catchphrase;
