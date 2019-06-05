import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Catchphrase.module.css';
import LayoutContainer from '../../../components/layout-container/LayoutContainer';

import { debounce } from 'lodash';

class Catchphrase extends Component {
    constructor(props) {
        super(props);

        this.isGoingDown = undefined;
        this.maxLeftTransform = -100;
        this.maxRightTransform = 0;
        this.translateSteps = 1.2;

        this.state = {
            translateValue: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', debounce(this.handleScroll.bind(this), 10));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
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
            <LayoutContainer
                contentClassName={ styles.layoutContent }
                className={ classNames(styles.container, className) } >
                <div id="catchphraseContainer" className={ styles.blackScreen }>
                    <div className={ applyClassNames } style={ applyStyles } >
                        <h2> An interoperable world. Open, but under your control.</h2>
                    </div>
                </div>
            </LayoutContainer>
        );
    }

    handleScroll() {
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
    }
}

Catchphrase.propTypes = {
    className: PropTypes.string,
};

export default Catchphrase;
