import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LayoutContainer from '../../../components/layout-container/LayoutContainer';
import { title, blocks } from './data';
import { ArrowRightIcon } from '../../icon';
import styles from './Why.module.css';

const Why = ({ className }) => (
    <LayoutContainer id="why" className={ classNames(styles.why, className) } contentClassName={ styles.whyContent }>
        <ul className={ styles.list }>
            <li className={ styles.blockTitle }><h2>{ title }</h2></li>
            { blocks.map((block, index) => <Block key={ index } order={ index } { ...block } />) }
        </ul>
    </LayoutContainer>
);

const Block = ({ icon, title, description, link, order }) => (
    <li className={ classNames(styles.block, styles[`block${order + 1}`]) }>
        <i className={ styles.illustration } dangerouslySetInnerHTML={ { __html: icon } } />
        <div className={ styles.title }>{ title }</div>
        <div className={ styles.description }>{description}</div>
        <a href={ link } className={ styles.link }><ArrowRightIcon /></a>
    </li>
);

Block.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    order: PropTypes.number,
};

Why.propTypes = {
    className: PropTypes.string,
};

export default Why;
