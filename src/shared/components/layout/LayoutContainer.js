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
        const { children, variant, className, component: Component, contentClassName, ...props } = this.props;

        return (
            <Component className={ classNames(VARIANTS_MAP[variant], className) } { ...props }>
                <div className={ classNames(CONTENT_VARIANTS_MAP[variant], contentClassName) }>
                    { children }
                </div>
            </Component>
        );
    }
}

LayoutContainer.propTypes = {
    component: PropTypes.elementType,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['normal', 'split-left', 'split-right']),
    contentClassName: PropTypes.string,
    children: PropTypes.node.isRequired,
};

LayoutContainer.defaultProps = {
    component: 'section',
    variant: 'normal',
};

export default LayoutContainer;
