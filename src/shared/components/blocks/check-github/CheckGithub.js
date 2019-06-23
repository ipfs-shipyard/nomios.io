import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './CheckGithub.module.css';
import Button from '../../button';
import { GithubIcon } from '../../icon';

class CheckGithub extends Component {
    state = {
        width: 'none',
    };

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    render() {
        const { className } = this.props;
        const { width } = this.state;

        return (
            <div className={ classNames(styles.checkGithub, className) }>
                <div className={ styles.title }>{ width < '1680' ? 'Open Source' : 'We\'re fully open source.' }</div>
                <div className={ styles.description }>Are you a developer?</div>
                <a className={ styles.buttonBox } href="https://github.com/ipfs-shipyard/pm-idm" target="_blank" rel="noopener noreferrer">
                    <Button className={ styles.cta } variant="secondary" >
                        <div className={ styles.buttonText }>Check GitHub <GithubIcon className={ styles.logo } /></div>
                    </Button>
                </a>
            </div>
        );
    }

    updateDimensions() {
        this.setState({ width: document.body.clientWidth });
    }
}

CheckGithub.propTypes = {
    className: PropTypes.string,
};

export default CheckGithub;
