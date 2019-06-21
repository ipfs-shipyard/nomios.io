import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CheckWorkshop.module.css';
import Button from '../../button';

const CheckWorkshop = ({ className }) => (
    <div className={ classNames(styles.checkWorkshop, className) }>
        <div className={ styles.content }>
            <div className={ styles.title }>Try it yourself</div>
            <div className={ styles.description }>Follow a workshop to learn integrating within your DApp</div>
            <a className={ styles.buttonBox } href="https://github.com/ipfs-shipyard/workshop-idm-chat-dapp" target="_blank" rel="noopener noreferrer">
                <Button className={ styles.cta } variant="primary" >VIEW WORKSHOP</Button>
            </a>
        </div>
    </div>
);

CheckWorkshop.propTypes = {
    className: PropTypes.string,
};

export default CheckWorkshop;
