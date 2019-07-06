import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LayoutContainer } from '../../layout';
import Button from '../../button';
import styles from './CheckWorkshop.module.css';

const CheckWorkshop = ({ className }) => (
    <LayoutContainer
        variant="split-left"
        className={ classNames(styles.checkWorkshop, className) }
        contentClassName={ styles.checkWorkshopContent }>
        <div className={ styles.wrapper }>
            <div className={ styles.title }>Try it yourself</div>
            <div className={ styles.description }>Learn how to integrate IDM into your DApp.</div>
            <Button
                element={ <a href="https://github.com/ipfs-shipyard/workshop-idm-chat-dapp" target="_blank" rel="noopener noreferrer" /> }
                className={ styles.button }>
                View workshop
            </Button>
        </div>
    </LayoutContainer>
);

CheckWorkshop.propTypes = {
    className: PropTypes.string,
};

export default CheckWorkshop;
