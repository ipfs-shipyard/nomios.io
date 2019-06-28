import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { throttle } from 'lodash';
import Logo from '../logo';
import Button from '../button';
import { LayoutContainer } from '../layout';
import styles from './Header.module.css';

export const HEADER_HEIGHT = 120;
export const HEADER_HEIGHT_SMALL = 80;
export const HEADER_FIXED_BREAKPOINT = 1024;

class Header extends Component {
    state = {
        anchorOffset: 0,
    };

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.handleResize();
            window.addEventListener('resize', this.handleResize, { passive: true });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize, { passive: true });
    }

    render() {
        const { small, className } = this.props;
        const { anchorOffset } = this.state;

        return (
            <LayoutContainer
                data-scrollbar-compensate={ small ? '1' : '0' }
                component="header"
                className={ classNames(styles.header, small && styles.small, className) }
                contentClassName={ styles.headerContent }>
                <div className={ styles.anchorsContainer }>
                    <AnchorLink href="#why" offset={ anchorOffset }>Benefits</AnchorLink>
                    <AnchorLink href="#concept" offset={ anchorOffset }>Concept</AnchorLink>
                    <AnchorLink href="#roadmap" offset={ anchorOffset - 2 } >Roadmap</AnchorLink>
                </div>

                <a href="#" className={ styles.logoContainer } onClick={ this.handleLogoClick }>
                    <Logo className={ styles.symbol } variant="symbol" />
                    <Logo className={ styles.logotype } variant="logotype" />
                </a>

                <div className={ classNames(styles.buttonContainer, styles.desktop) } >
                    <AnchorLink href="#subscribe" offset={ anchorOffset } >
                        <Button variant="secondary">Join us</Button>
                    </AnchorLink>
                </div>
                <div className={ classNames(styles.buttonContainer, styles.tablet) } >
                    <AnchorLink href="#subscribe" offset={ anchorOffset } >Join us</AnchorLink>
                </div>
            </LayoutContainer>
        );
    }

    handleResize = throttle(() => {
        this.setState({
            anchorOffset: window.innerWidth <= HEADER_FIXED_BREAKPOINT ? 0 : HEADER_HEIGHT_SMALL,
        });
    }, 250);

    handleLogoClick = (e) => {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };
}

Header.propTypes = {
    small: PropTypes.bool,
    className: PropTypes.string,
};

export default Header;
