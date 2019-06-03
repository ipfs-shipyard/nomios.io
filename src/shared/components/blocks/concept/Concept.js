import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Concept.module.css';

const Concept = ({ className }) => (
    <div className={ classNames(styles.concept, className) }>
        This is the concept!
    </div>
);

Concept.propTypes = {
    className: PropTypes.string,
};

export default Concept;
