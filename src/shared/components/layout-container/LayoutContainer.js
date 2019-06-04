import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Styles
import styles from './LayoutContainer.module.css';

class LayoutContainer extends Component {
    render() {
        const { children, className, contentClassName, ...props } = this.props;

        return (
            <section className={ classNames(className, styles.container) } { ...props }>
                <div className={ classNames(contentClassName, styles.content) }>
                    { children }
                </div>
            </section>
        );
    }
}

LayoutContainer.propTypes = {
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default LayoutContainer;
