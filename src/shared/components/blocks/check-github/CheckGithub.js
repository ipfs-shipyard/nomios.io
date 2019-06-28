import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { LayoutContainer } from '../../layout';
import Button from '../../button';
import { GithubIcon } from '../../icon';
import styles from './CheckGithub.module.css';

class CheckGithub extends Component {
    render() {
        const { className } = this.props;

        return (
            <LayoutContainer
                variant="split-right"
                className={ classNames(styles.checkGithub, className) }
                contentClassName={ styles.checkGithubContent }>
                <div className={ styles.wrapper }>
                    <div className={ styles.title }>We&#39;re open source</div>
                    <div className={ styles.description }>Get involved or see how it works.</div>
                    <a className={ styles.buttonBox } href="https://github.com/ipfs-shipyard/pm-idm" target="_blank" rel="noopener noreferrer">
                        <Button className={ styles.cta } variant="secondary" >
                            <div className={ styles.buttonText }>View GitHub <GithubIcon className={ styles.logo } /></div>
                        </Button>
                    </a>
                </div>
            </LayoutContainer>
        );
    }
}

CheckGithub.propTypes = {
    className: PropTypes.string,
};

export default CheckGithub;
