import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './LayoutContainer.module.css';

const VARIANTS_MAP = {
    normal: styles.layoutNormal,
    'split-left': styles.layoutSplitLeft,
    'split-right': styles.layoutSplitRight,
};

const CONTENT_VARIANTS_MAP = {
    normal: styles.layoutContentNormal,
    'split-left': styles.layoutContentSplitLeft,
    'split-right': styles.layoutContentSplitRight,
};

class LayoutContainer extends Component {
    render() {
        const { children, variant, className, contentClassName, ...props } = this.props;

        return (
            <section className={ classNames(VARIANTS_MAP[variant], className) } { ...props }>
                <div className={ classNames(CONTENT_VARIANTS_MAP[variant], contentClassName) }>
                    { children }
                </div>
            </section>
        );
    }
}

LayoutContainer.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['normal', 'split-left', 'split-right']),
    contentClassName: PropTypes.string,
    children: PropTypes.node.isRequired,
};

LayoutContainer.defaultProps = {
    variant: 'normal',
};

export default LayoutContainer;
