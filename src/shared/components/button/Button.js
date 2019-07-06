import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import { CheckmarkIcon, CrossmarkIcon } from '../icon';
import styles from './Button.module.css';

const PROGRESS_STATUS_MAP = {
    none: 'initial',
    loading: 'running',
    success: 'complete',
    error: 'complete',
};

class Button extends Component {
    state = {
        feedback: 'none',
        progressbarAnimationEnded: false,
    };

    componentDidMount() {
        this.handleFeedbackChange();
    }

    componentDidUpdate(prevProps) {
        if (this.props.feedback !== prevProps.feedback) {
            this.handleFeedbackChange(prevProps.feedback);
        }
    }

    render() {
        const { element, variant, feedback: _, fullWidth, disabled, className, children, ...rest } = this.props;
        const { feedback, progressbarAnimationEnded } = this.state;
        const hasFeedback = feedback !== 'none';

        const finalDisabled = disabled || hasFeedback;
        const finalClassName = classNames(
            styles.button,
            styles[variant],
            finalDisabled && styles.disabled,
            hasFeedback && progressbarAnimationEnded && styles[feedback],
            hasFeedback && styles.hasFeedback,
            fullWidth && styles.fullWidth,
            element.props.className,
            className,
        );

        return (
            <element.type
                { ...element.props }
                { ...rest }
                { ...this.getDisabledProps(finalDisabled) }
                className={ finalClassName }>
                <span className={ styles.textBlock }>
                    <span className={ styles.text }>{ children }</span>

                    <ProgressBar
                        status={ PROGRESS_STATUS_MAP[feedback] }
                        className={ styles.progressBar }
                        onEnd={ this.handleProgressBarEnd } />
                </span>

                <span className={ styles.successBlock }>
                    <CheckmarkIcon className={ styles.checkmark } />
                </span>
                <span className={ styles.errorBlock }>
                    <CrossmarkIcon className={ styles.crossmark } />
                </span>
            </element.type>
        );
    }

    getDisabledProps(disabled) {
        if (!disabled) {
            return {};
        }

        const elementType = this.props.element.type;

        return elementType === 'button' ?
            { disabled: true } :
            { 'aria-disabled': 'true', tabIndex: '-1' };
    }

    handleFeedbackChange(prevFeedback) {
        const { feedback } = this.props;
        const progressbarAnimationEnded = (feedback === 'success' || feedback === 'error') && prevFeedback !== 'loading';

        this.setState({
            feedback,
            progressbarAnimationEnded,
        });
    }

    handleProgressBarEnd = () => {
        this.setState({ progressbarAnimationEnded: true });
    };
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    feedback: PropTypes.oneOf(['none', 'loading', 'success', 'error']),
    element: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
};

Button.defaultProps = {
    variant: 'primary',
    feedback: 'none',
    element: <button />,
};

export default Button;
