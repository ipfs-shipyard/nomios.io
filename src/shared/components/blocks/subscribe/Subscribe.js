import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import Lottie from 'react-lottie';
import { Form, Field } from 'react-final-form';
import createFocusDecorator from 'final-form-focus';
import Observer from '@researchgate/react-intersection-observer';
import { LayoutSplit, LayoutContainer } from '../../layout';
import { CrossmarkIcon } from '../../icon';
import Button from '../../button';
import * as animationData from '../../../media/illustrations/illustration-stamp-animation.json';
import styles from './Subscribe.module.css';

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

    state = {
        intersected: false,
    };

    componentWillUnmount() {
        clearTimeout(this.resetSubmitTimeout);
    }

    render() {
        const { className } = this.props;

        return (
            <Observer onChange={ this.handleIntersect } threshold={ 0.5 }>
                <LayoutSplit
                    id="subscribe"
                    left={ this.renderLeft() }
                    right={ this.renderRight() }
                    className={ classNames(styles.subscribe, className) } />
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
        const { intersected } = this.state;

        return (
            <LayoutContainer
                variant="split-right"
                className={ styles.rightSide }
                contentClassName={ styles.rightSideContent }>
                <Lottie
                    width={ 260 }
                    isPaused={ !intersected }
                    options={ LOTTIE_OPTIONS }
                    isClickToPauseDisabled />
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
                                        disabled={ !!feedback }
                                        placeholder="Enter Your Email"
                                        className={ styles.input } />
                                    <CrossmarkIcon className={ styles.crossmark } />
                                </div>
                            </>
                        );
                    } }
                </Field>

                <Button
                    className={ styles.submit }
                    feedback={ feedback }
                    type="submit"
                    variant="secondary">
                    Join now
                </Button>
            </form>
        );
    };

    handleIntersect = ({ isIntersecting }) => {
        isIntersecting && this.setState({ intersected: true });
    };

    handleSubmit = async (values, { reset }) => {
        let res;

        try {
            res = await addToMailchimp(values.email);
        } finally {
            this.resetSubmitTimeout = setTimeout(reset, 2500);
        }

        if (res.result === 'error') {
            throw new Error(res.msg);
        }
    };
}

Subscribe.propTypes = {
    className: PropTypes.string,
};

export default Subscribe;
