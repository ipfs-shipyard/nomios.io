import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../button';
import VideoTrigger from '../../video-trigger';
import VideoModal from '../../video-modal';
import { LayoutContainer, LayoutSplit } from '../../layout';
import andreNomiosImage from '../../../media/images/andrenomios.png';
import styles from './Concept.module.css';

class Concept extends Component {
    state = {
        modalShowing: false,
    };

    componentDidUpdate() {
        const { modalShowing } = this.state;

        if (modalShowing) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    render() {
        const { className } = this.props;

        return (
            <LayoutSplit
                id="concept"
                splitAt="medium"
                left={ this.renderLeft() }
                right={ this.renderRight() }
                className={ classNames(styles.concept, className) } />
        );
    }

    renderLeft() {
        return (
            <LayoutContainer
                variant="split-left"
                className={ styles.leftSide }
                contentClassName={ styles.leftSideContent }>
                <div className={ styles.wrapper }>
                    <div className={ styles.title }>The concept</div>
                    <div className={ styles.description }>
                        Nomios is an identity wallet built on the IDM (Identity Manager) concept and specification.
                    </div>
                    <a className={ styles.cta } href="https://github.com/ipfs-shipyard/pm-idm/blob/master/docs/idm-concept.md" target="_blank" rel="noopener noreferrer">
                        <Button variant="secondary">
                            Learn more
                        </Button>
                    </a>
                </div>
            </LayoutContainer>
        );
    }

    renderRight() {
        const { modalShowing } = this.state;

        return (
            <LayoutContainer
                variant="split-right"
                className={ styles.rightSide }
                contentClassName={ styles.rightSideContent }>
                <div className={ styles.videoBox }>
                    <VideoTrigger src={ andreNomiosImage } onClick={ this.handleVideoTriggerClick } />
                </div>
                <VideoModal src="https://www.youtube.com/embed/glEiPXAYE-U" showing={ modalShowing } onClick={ this.handleVideoModalClick } />
            </LayoutContainer>
        );
    }

    handleVideoTriggerClick = () => {
        this.setState({ modalShowing: true });
    };

    handleVideoModalClick = () => {
        this.setState({ modalShowing: false });
    };
}

Concept.propTypes = {
    className: PropTypes.string,
};

export default Concept;
