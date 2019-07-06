import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';

export default class AnchorLinkHashed extends AnchorLink {
    static propTypes = {
        // eslint-disable-next-line
        ...AnchorLink.propTypes,
        changeHash: PropTypes.bool,
    };

    render() {
        const { offset, ...rest } = this.props;

        return (
            <a { ...rest } onClick={ this.handleClick } />
        );
    }

    handleClick = (e) => {
        super.smoothScroll(e);
        const id = e.currentTarget.getAttribute('href').slice(1);

        history.pushState(null, null, `#${id}`);
    };
}
