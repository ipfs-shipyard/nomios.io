import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Svg from '../svg';
import styles from './Icon.module.css';

const Icon = forwardRef((props, ref) => {
    const { className, ...rest } = props;
    const finalProps = {
        ...rest,
        className: classNames(styles.icon, className),
    };

    return <Svg ref={ ref } { ...finalProps } />;
});

Icon.propTypes = {
    svg: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ then: PropTypes.func.isRequired })]).isRequired,
    className: PropTypes.string,
};

export default Icon;
