import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GithubIcon, ProtocolLabsSymbolIcon, MoxyLogoIcon } from '../icon';
import { LayoutContainer } from '../layout';
import styles from './Footer.module.css';

const Footer = ({ className }) => (
    <LayoutContainer
        component="footer"
        className={ classNames(styles.footer, className) }>
        <div className={ classNames(styles.footerContent) }>
            <p className={ styles.githubLink }>
                Nomios © 2019 – Build with us, join our GitHub.
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ipfs-shipyard/pm-idm#contributing" >
                    <GithubIcon className={ styles.githubLogo } />
                </a>
            </p>

            <p className={ styles.githubLinkTablet }>
                Nomios © 2019 – Build with us.
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ipfs-shipyard/pm-idm#contributing" >
                    <GithubIcon className={ styles.githubLogo } />
                </a>
            </p>

            <p className={ styles.companies } >
                <div className={ styles.moxy }>
                    Built by
                    <a rel="noopener noreferrer" target="_blank" href="https://moxy.studio" >
                        <MoxyLogoIcon className={ styles.moxyBrand } />
                    </a>
                </div>
                <div className={ styles.protocolLabs }>
                    Sponsored by
                    <a rel="noopener noreferrer" target="_blank" href="https://protocol.ai/" >
                        <ProtocolLabsSymbolIcon className={ styles.plBrand } />
                    </a>
                </div>

            </p>

            <p className={ styles.companiesTablet }>
                    Build with us.
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/ipfs-shipyard/pm-idm#contributing" >
                    <GithubIcon className={ styles.githubLogo } />
                </a>
            </p>

            <p className={ styles.copyrightMobile }>
                Nomios © 2019 –&nbsp;
                <a
                    className={ styles.githubLinkMobile }
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/ipfs-shipyard/pm-idm#contributing">
                    Build with us on GitHub.
                </a>
            </p>
        </div>
    </LayoutContainer>
);

Footer.propTypes = {
    className: PropTypes.string,
};

export default Footer;
