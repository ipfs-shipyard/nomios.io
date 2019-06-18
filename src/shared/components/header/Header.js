import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.css';
import Logo from '../logo';
import Button from '../button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const anchorsObject = [
    {
        value: 'Benefits',
        anchor: 'why',
    },
    {
        value: 'Concept',
        anchor: 'concept',
    },
    {
        value: 'Roadmap',
        anchor: 'roadmap',
    },
];

const Header = ({ className, resize }) => (
    <header className={ classNames(styles.header, className) } >
        <div className={ (styles.headerContent) }>
            <div className={ styles.anchorsContainer }>
                {anchorsObject.map((item) => <AnchorLink offset={ 80 } href={ `#${item.anchor}` } key={ item.value }> {item.value} </AnchorLink>)}
            </div>
            <Logo className={ styles.headerLogo } variant={ !resize ? 'horizontal' : 'symbol' } />
            <div className={ styles.buttonContainer } >
                <Button variant={ 'secondary' }>
                    <AnchorLink offset={ 79 } href="#subscribe"> Join us </AnchorLink>
                </Button>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    resize: PropTypes.bool,
    className: PropTypes.string,
};

export default Header;
