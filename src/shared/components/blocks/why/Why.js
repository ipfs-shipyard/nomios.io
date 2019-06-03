import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Why.module.css';
import LayoutContainer from '../../../components/layout-container/LayoutContainer';

const Why = ({ className }) => (
    <LayoutContainer>
        <div className={ classNames(styles.why, className) }>
            This is the why!
        </div>
    </LayoutContainer>
);

Why.propTypes = {
    className: PropTypes.string,
};

export default Why;
