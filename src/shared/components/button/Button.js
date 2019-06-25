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
        const { variant, feedback: _, fullWidth, disabled, className, children, ...rest } = this.props;
        const { feedback, progressbarAnimationEnded } = this.state;
        const hasFeedback = feedback !== 'none';

        const finalDisabled = disabled || hasFeedback;
        const finalClassName = classNames(
            styles.button,
            styles[variant],
            hasFeedback && progressbarAnimationEnded && styles[feedback],
            hasFeedback && styles.hasFeedback,
            fullWidth && styles.fullWidth,
            className
        );

        return (
            <button { ...rest } disabled={ finalDisabled } className={ finalClassName }>
                <div className={ styles.textBlock }>
                    <span className={ styles.text }>{ children }</span>

                    <ProgressBar
                        status={ PROGRESS_STATUS_MAP[feedback] }
                        className={ styles.progressBar }
                        onEnd={ this.handleProgressBarEnd } />
                </div>

                <span className={ styles.successBlock }>
                    <CheckmarkIcon className={ styles.checkmark } onTransitionEnd={ this.handleSuccessIconTransitionEnd } />
                </span>
                <span className={ styles.errorBlock }>
                    <CrossmarkIcon className={ styles.crossmark } onTransitionEnd={ this.handleErrorIconTransitionEnd } />
                </span>
            </button>
        );
    }

    handleFeedbackChange(prevFeedback) {
        const { feedback } = this.props;

        if ((feedback === 'success' || feedback === 'error') && prevFeedback !== 'loading') {
            this.setState({
                feedback,
                progressbarAnimationEnded: true,
            });
        } else {
            this.setState({
                feedback,
                progressbarAnimationEnded: false,
            });
        }
    }

    handleProgressBarEnd = () => {
        this.setState({ progressbarAnimationEnded: true });
    };
}

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'negative']),
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    feedback: PropTypes.oneOf(['none', 'loading', 'success', 'error']),
    children: PropTypes.node,
    className: PropTypes.string,
};

Button.defaultProps = {
    variant: 'primary',
    feedback: 'none',
};

export default Button;
