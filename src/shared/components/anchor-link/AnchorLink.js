import React, { Component } from 'react';
import BaseAnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

class AnchorLink extends Component {
    render() {
        const { changeHash, ...rest } = this.props;

        return <BaseAnchorLink { ...rest } onClick={ this.handleClick } />;
    }

    handleClick = (e) => {
        const { changeHash, onClick } = this.props;

        if (changeHash) {
            const id = e.currentTarget.getAttribute('href').slice(1);

            history.pushState(null, null, `#${id}`);
        }

        onClick && onClick(e);
    };
}

AnchorLink.propTypes = {
    changeHash: PropTypes.bool,
    onClick: PropTypes.func,
};

export default AnchorLink;
