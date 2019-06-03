import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import symbolSvg from '../../media/icons/icon-brand-symbol.svg';
import logotypeSvg from '../../media/icons/icon-brand-logotype.svg';
import styles from './Logo.module.css';

const Logo = ({ variant, className, ...rest }) => {
    const showSymbol = variant !== 'logotype';
    const showLogotype = variant !== 'symbol';

    const containerClass = classNames(
        styles.container,
        styles[variant],
        className,
    );

    const symbolClassName = classNames(
        styles.svg,
        styles.symbol,
    );

    const logotypeClassName = classNames(
        styles.svg,
        styles.logotype,
    );

    return (
        <div { ...rest } className={ containerClass }>
            { showSymbol && <i className={ symbolClassName } dangerouslySetInnerHTML={ { __html: symbolSvg } } /> }
            { showLogotype && <i className={ logotypeClassName } dangerouslySetInnerHTML={ { __html: logotypeSvg } } /> }
        </div>
    );
};

Logo.propTypes = {
    variant: PropTypes.oneOf(['symbol', 'logotype', 'horizontal', 'vertical']),
    className: PropTypes.string,
};

Logo.defaultProps = {
    variant: 'horizontal',
};

export default Logo;
