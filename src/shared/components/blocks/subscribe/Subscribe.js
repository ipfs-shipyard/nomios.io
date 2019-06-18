import React, { Component } from 'react';
import Lottie from 'react-lottie';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Subscribe.module.css';
import Button from '../../button';
import LayoutContainer from '../../../components/layout-container/LayoutContainer';
import * as animationData from '../../../media/illustrations/illustration-stamp-animation.json';
import { CrossmarkIcon } from '../../icon';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = () => wait(200);

class Subscribe extends Component {
    render() {
        const { className } = this.props;

        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        };

        return (
            <LayoutContainer id="subscribe" className={ classNames(styles.subscribe, className) }>
                <div className={ styles.subscribeWrapper }>
                    <div className={ styles.joinUs }>
                        <div className={ styles.firstText }>
                            Join The Effort.
                        </div>
                        <p className={ styles.secondText }>
                            Want to get involved? Join our mailing list to never miss an update.
                        </p>

                        <Form
                            onSubmit={ onSubmit }
                            render={ this.renderForm } />
                    </div>
                    <div className={ styles.image }>
                        <Lottie options={ defaultOptions }
                            height={ '100%' }
                            width={ 260 } />
                    </div>
                </div>
            </LayoutContainer>
        );
    }

    renderForm = ({ handleSubmit, submitSucceeded, submitFailed, dirtySinceLastSubmit }) => {
        const hasSubmitted = submitSucceeded || submitFailed;

        return (
            <form className={ styles.form } onSubmit={ handleSubmit }>
                <div className={ styles.inputCrossWrapper }>
                    <Field
                        component="input"
                        className={ classNames(styles.input, { [styles.inputSuccess]: hasSubmitted && submitSucceeded, [styles.inputFail]: hasSubmitted && submitFailed }) }
                        type="email"
                        name="email"
                        placeholder="Enter Your Email" />
                    { hasSubmitted && submitFailed && !dirtySinceLastSubmit && <CrossmarkIcon className={ styles.cross } /> }
                </div>
                { !hasSubmitted && <Button className={ styles.submit } type="submit" variant="secondary">
                    JOIN NOW
                </Button> }
                { hasSubmitted &&
                    <Button
                        className={ styles.submit }
                        feedback={ submitSucceeded ? 'success' : undefined }
                        type="submit"
                        variant="secondary"
                        errorClassName={ submitFailed ? styles.error : undefined }
                        successClassName={ submitSucceeded ? styles.success : undefined }>
                        JOIN NOW
                    </Button>
                }
            </form>
        );
    };
}

Subscribe.propTypes = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
};

export default Subscribe;
