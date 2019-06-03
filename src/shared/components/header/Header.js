import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Header.module.css';
import Logo from '../logo';
import Button from '../button';

const anchorsObject = [
    {
        value: 'Benefits',
        anchor: '',
    },
    {
        value: 'Concept',
        anchor: '',
    },
    {
        value: 'Roadmap',
        anchor: '',
    },
];

const Header = ({ className }) => (
    <header className={ classNames(styles.header, className) } >
        <div className={ (styles.headerContent) }>
            <div className={ styles.anchorsContainer }>
                {anchorsObject.map((item) => <a href={ `#${item.anchor}` } key={ item.value }> {item.value} </a>)}
            </div>
            <Logo className={ styles.headerLogo } variant={ 'horizontal' } />
            <div className={ styles.buttonContainer } >
                <Button variant={ 'secondary' }>
                    <a href="#"> Join us </a>
                </Button>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    className: PropTypes.string,
};

export default Header;
