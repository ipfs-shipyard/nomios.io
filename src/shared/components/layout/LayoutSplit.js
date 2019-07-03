import React, { Component, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './LayoutSplit.module.css';

class LayoutSplit extends Component {
    render() {
        const { splitAt, left, right, className, activeRef, ...props } = this.props;

        return (
            <div className={ classNames(styles.layoutSplit, styles[splitAt], className) } ref={ activeRef } { ...props }>
                { cloneElement(left, {
                    ...left.props,
                    className: classNames(styles.left, left.props.className),
                }) }
                { cloneElement(right, {
                    ...right.props,
                    className: classNames(styles.right, right.props.className),
                }) }
            </div>
        );
    }
}

LayoutSplit.propTypes = {
    splitAt: PropTypes.oneOf(['medium', 'small']),
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired,
    activeRef: PropTypes.object,
    className: PropTypes.string,
};

LayoutSplit.defaultProps = {
    splitAt: 'small',
};

export default LayoutSplit;
