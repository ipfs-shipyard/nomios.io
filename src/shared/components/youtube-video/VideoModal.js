import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Youtube from 'react-youtube';
import { DotLoader } from 'react-spinners';
import './compensate-scrollbar';
import styles from './VideoModal.module.css';

const MODAL_TRANSITION_DURATION = 300;

const YOUTUBE_OPTIONS = {
    width: '100%',
    height: '100%',
    playerVars: {
        autoplay: 1,
        modestbranding: 1,
        rel: 0,
    },
};

class VideoModal extends Component {
    state = {
        ready: false,
    };

    render() {
        const { open, videoId, onClose } = this.props;
        const { ready } = this.state;

        const overlayClassName = {
            base: styles.modalOverlay,
            afterOpen: styles.afterOpen,
            beforeClose: styles.beforeClose,
        };

        return (
            <Modal
                isOpen={ open }
                shouldCloseOnOverlayClick
                shouldCloseOnEsc={ false }
                closeTimeoutMS={ MODAL_TRANSITION_DURATION }
                onRequestClose={ onClose }
                onAfterClose={ this.handleAfterClose }
                bodyOpenClassName={ styles.modalBodyOpen }
                overlayClassName={ overlayClassName }
                className={ classNames(styles.modal, ready && styles.ready) }>
                <div className={ styles.loader }>
                    <DotLoader
                        sizeUnit="rem"
                        size={ 12.5 }
                        color="#bea48a"
                        loading />
                </div>

                <div className={ styles.video } onClick={ onClose }>
                    <Youtube
                        videoId={ videoId }
                        opts={ YOUTUBE_OPTIONS }
                        containerClassName={ styles.iframeWrapper }
                        onReady={ this.handleReady }
                        onError={ this.handleError } />
                </div>
            </Modal>
        );
    }

    handleReady = () => {
        this.setState({ ready: true });
    };

    handleError = () => {
        this.setState({ ready: true });
    };

    handleAfterClose = () => {
        this.setState({ ready: false });
    };
}

VideoModal.propTypes = {
    open: PropTypes.bool,
    videoId: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default VideoModal;
