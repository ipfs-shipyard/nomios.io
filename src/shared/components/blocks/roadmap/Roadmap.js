import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Roadmap.module.css';

const Roadmap = ({ className }) => (
    <div className={ classNames(styles.roadmap, className) }>
        This is the roadmap!
    </div>
);

Roadmap.propTypes = {
    className: PropTypes.string,
};

export default Roadmap;
