import React, { Component } from 'react';
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

const HEADER_OFFSET = 80;

class Header extends Component {
    state = {
        offset: window.innerWidth <= 1024 ? 0 : HEADER_OFFSET,
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    render() {
        const { offset } = this.state;

        return (
            <header className={ classNames(styles.header, this.props.className) } >
                <div className={ (styles.headerContent) }>
                    <div className={ styles.anchorsContainer }>
                        {anchorsObject.map((item) => <AnchorLink offset={ 79 } href={ `#${item.anchor}` } key={ item.value }> {item.value} </AnchorLink>)}
                    </div>
                    <Logo className={ styles.headerLogo } variant={ !this.props.resize ? 'horizontal' : 'symbol' } />
                    <div className={ styles.buttonContainer } >
                        <AnchorLink offset={ offset } href="#subscribe">
                            <Button variant={ 'secondary' }>
                    JOIN US
                            </Button>
                        </AnchorLink>
                    </div>
                </div>
            </header>
        );
    }

    updateWindowDimensions = () => {
        const { offset } = this.state;

        offset === HEADER_OFFSET && window.innerWidth <= 1024 && this.setState({ offset: 0 });
        offset === 0 && window.innerWidth > 1024 && this.setState({ offset: HEADER_OFFSET });
    };
}

Header.propTypes = {
    resize: PropTypes.bool,
    className: PropTypes.string,
};

export default Header;
