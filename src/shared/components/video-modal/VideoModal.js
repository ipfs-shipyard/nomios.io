import React from 'react';
import PropTypes from 'prop-types';
import styles from './VideoModal.module.css';
import classNames from 'classnames';

const VideoModal = ({ showing, src, onClick }) => (
    <div className={ classNames(styles.modalContainer, showing ? styles.modalContainerActive : styles.modalContainerHidden) } >
        <div className={ classNames(showing ? styles.videoModal : styles.hidden) } onClick={ handleClick(onClick) } />
        <iframe
            ref={ setRef }
            className={ classNames(showing ? styles.video : styles.hidden) }
            src={ `${src}?enablejsapi=1` }
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
    </div>
);

let ref;

const setRef = (videoRef) => {
    ref = videoRef;
};

const handleClick = (onClick) => () => {
    if (!ref) {
        return;
    }

    ref.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');

    onClick();
};

VideoModal.propTypes = {
    showing: PropTypes.bool.isRequired,
    src: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default VideoModal;
