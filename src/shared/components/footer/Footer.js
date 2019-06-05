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
            <p className={ styles.githubLink } >
                Build a better world, join our GitHub project.
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ipfs-shipyard/pm-idm#contributing" >
                    <GithubIcon className={ styles.githubLogo } />
                </a>
            </p>
            <p className={ styles.githubLinkTablet }>
                Build with us.
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ipfs-shipyard/pm-idm#contributing" >
                    <GithubIcon className={ styles.githubLogo } />
                </a>
            </p>
            <p className={ styles.copyrightMobile }>© 2019 - Sponsored by <a rel="noopener noreferrer" target="_blank" href="https://protocol.ai/" ><ProtocolLabsBrandIcon className={ styles.plBrand } /></a>
            </p>
        </div>
    </div>
);

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
