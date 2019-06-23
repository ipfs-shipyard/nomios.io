import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Concept.module.css';
import Button from '../../button';
import VideoTrigger from '../../video-trigger';
import VideoModal from '../../video-modal';
import { isBelowSmallDesktop } from '../../../utils/windowInfo';
import andreNomiosImage from '../../../media/images/andrenomios.png';

class Concept extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShowing: false,
        };
    }

    componentDidUpdate() {
        const { modalShowing } = this.state;

        if (modalShowing) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    render() {
        const { className } = this.props;
        const { modalShowing } = this.state;

        return (
            <div id="concept" className={ classNames(styles.concept, className) }>
                <div className={ classNames(isBelowSmallDesktop ? styles.fullWidth : styles.halfWidth, styles.leftSide) }>
                    <div className={ styles.content }>
                        <div className={ styles.title }>
                            The concept
                        </div>
                        <div className={ styles.description }>
                            Nomios is an identity wallet built on the IDM (Identity Manager) concept and specification.
                        </div>
                        <a className={ styles.buttonBox } href="https://github.com/ipfs-shipyard/pm-idm/blob/master/docs/idm-concept.md" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">
                                Learn more
                            </Button>
                        </a>
                    </div>
                </div>
                <div className={ classNames(isBelowSmallDesktop ? styles.fullWidth : styles.halfWidth, styles.rightSide, styles.videoTriggerContainer) }>
                    <div className={ styles.videoBox }>
                        <VideoTrigger src={ andreNomiosImage } onClick={ this.handleVideoTriggerClick } />
                    </div>
                    <VideoModal src="https://www.youtube.com/embed/glEiPXAYE-U" showing={ modalShowing } onClick={ this.handleVideoModalClick } />
                </div>
            </div>
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
