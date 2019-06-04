import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import Logo from '../logo';
import { GithubIcon, ProtocolLabsBrandIcon } from '../icon';

const Footer = ({ className }) => (
    <div className={ className }>
        <div className={ styles.footerWrapper }>
            <p className={ styles.copyright }>Nomios © 2019 - Sponsored by  <a rel="noopener noreferrer" target="_blank" href="https://protocol.ai/" > <ProtocolLabsBrandIcon className={ styles.plBrand } /></a></p>
            <p className={ styles.copyrightTablet }>© 2019 - Sponsored by  <a rel="noopener noreferrer" target="_blank" href="https://protocol.ai/" > <ProtocolLabsBrandIcon className={ styles.plBrand } /></a></p>
            <Logo className={ styles.logo } />
            <a className={ styles.githubLink } rel="noopener noreferrer" target="_blank" href="https://github.com/ipfs-shipyard/pm-idm#contributing" >
                <p>Build a better world. Join our GitHub project <GithubIcon className={ styles.githubLogo } /></p>
            </a>
            <a className={ styles.githubLinkTablet } rel="noopener noreferrer" target="_blank" href="https://github.com/ipfs-shipyard/pm-idm#contributing" >
                <p>Build with us. <GithubIcon className={ styles.githubLogo } /></p>
            </a>
            <p className={ styles.copyrightMobile }>© 2019 - Sponsored by <a rel="noopener noreferrer" target="_blank" href="https://protocol.ai/" ><ProtocolLabsBrandIcon className={ styles.plBrand } /></a>
            </p>
        </div>
    </div>
);

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
