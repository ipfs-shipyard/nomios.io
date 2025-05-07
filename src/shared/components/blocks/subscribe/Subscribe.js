import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Form, Field } from 'react-final-form';
import createFocusDecorator from 'final-form-focus';
import { throttle } from 'lodash';
import { offset } from 'tiny-dom-helpers';
import Observer from '@researchgate/react-intersection-observer';
import { LayoutSplit, LayoutContainer } from '../../layout';
import { CrossmarkIcon } from '../../icon';
import Button from '../../button';
import { HEADER_HEIGHT_SMALL } from '../../header';
import LottieControllerd from '../../lottie-controlled';
import * as animationData from '../../../media/illustrations/illustration-stamp-animation.json';
import styles from './Subscribe.module.css';

const BREAKPOINT = 768;
const RESET_FORM_DELAY = 2500;
const LOTTIE_OPTIONS = {
    loop: false,
    autoplay: false,
    animationData: animationData.default,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid meet',
    },
};

const formDecorators = [createFocusDecorator()];
const emailValidator = (value) => /[^@]+@[^.]+\..+/.test(value) ? undefined : 'Invalid email';

class Subscribe extends PureComponent {
    resetSubmitTimeout = undefined;
    intersecting = false;
    wrapperRef = React.createRef();

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
        clearTimeout(this.resetSubmitTimeout);
    }

    render() {
        const { className } = this.props;

        return (
            <Observer onChange={ this.handleIntersect }>
                <LayoutSplit
                    id="subscribe"
                    left={ this.renderLeft() }
                    right={ this.renderRight() }
                    className={ classNames(styles.subscribe, className) }
                    ref={ this.wrapperRef } />
            </Observer>

        );
    }

    renderLeft() {
        return (
            <LayoutContainer
                variant="split-left"
                className={ styles.leftSide }
                contentClassName={ styles.leftSideContent }>
                <div className={ styles.wrapper }>
                    <div className={ styles.firstText }>Join the effort</div>
                    <p className={ styles.secondText }>
                        Want to get involved? Join our mailing list to never miss an update.
                    </p>

                    <Form
                        decorators={ formDecorators }
                        onSubmit={ this.handleSubmit }
                        render={ this.renderForm } />
                </div>
            </LayoutContainer>
        );
    }

    renderRight() {
        const { percentage } = this.state;

        return (
            <LayoutContainer
                variant="split-right"
                className={ styles.rightSide }
                contentClassName={ styles.rightSideContent }>
                <LottieControllerd
                    width={ 260 }
                    options={ LOTTIE_OPTIONS }
                    isClickToPauseDisabled
                    percentage={ percentage } />
            </LayoutContainer>
        );
    }

    renderForm = ({ handleSubmit, submitting, submitSucceeded, submitFailed, hasSubmitErrors }) => {
        let feedback;

        if (submitting) {
            feedback = 'loading';
        } else if (submitSucceeded) {
            feedback = 'success';
        } else if (submitFailed && hasSubmitErrors) {
            feedback = 'error';
        }

        return (
            <form
                className={ classNames(styles.form, feedback && styles.hasFeedback) }
                onSubmit={ handleSubmit }>
                <Field
                    name="email"
                    validate={ emailValidator }>
                    { ({ input, meta }) => {
                        const showError = meta.touched && meta.error && styles.invalid;

                        return (
                            <>
                                <div className={ classNames(styles.inputWrapper, showError && styles.invalid) }>
                                    <input
                                        { ...input }
                                        aria-label="Email"
                                        disabled={ !!feedback }
                                        placeholder="Enter your email"
                                        className={ styles.input } />
                                    <CrossmarkIcon className={ styles.crossmark } />
                                </div>
                            </>
                        );
                    } }
                </Field>

                <Button
                    variant="secondary"
                    type="submit"
                    feedback={ feedback }
                    className={ styles.submit }>
                    Join now
                </Button>
            </form>
        );
    };

    updateDimensions = () => {
        const wrapperNode = findDOMNode(this.wrapperRef.current);

        console.log(this.wrapperRef);
        this.windowSize = { width: window.innerWidth, height: window.innerHeight };
        this.wrapperSize = { width: wrapperNode.offsetWidth, height: wrapperNode.offsetHeight };
        this.wrapperOffsetTop = offset(wrapperNode).top;

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

    handleScroll = () => {
        if (this.intersecting) {
            this.updatePercentage();
        }
    };

    handleResize = throttle(() => this.updateDimensions(), 250);

    handleIntersect = ({ isIntersecting }) => {
        this.intersecting = isIntersecting;
    };

    handleSubmit = async (values, { reset }) => {
        let res;

        try {
            res = await addToMailchimp(values.email);
        } catch (err) {
            return err.message;
        } finally {
            this.resetSubmitTimeout = setTimeout(reset, RESET_FORM_DELAY);
        }

        if (res.result === 'error' && !/already subscribed/.test(res.msg)) {
            return res.msg;
        }
    };
}

Subscribe.propTypes = {
    className: PropTypes.string,
};

export default Subscribe;
