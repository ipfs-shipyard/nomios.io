import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Youtube from 'react-youtube';

import styles from './VideoInline.module.css';

const YOUTUBE_OPTIONS = {
    width: '100%',
    height: '100%',
    allowFullScreen: true,
    playerVars: {
        modestbranding: 1,
        rel: 0,
    },
};

class VideoInline extends Component {
    youtubeRef = React.createRef();

    render() {
        const { videoId, onReady } = this.props;
        const triggerClassnames = classNames(styles.triggerContainer);

        return (
            <div className={ triggerClassnames }
                onClick={ this.handleClick }>
                <Youtube
                    containerClassName={ styles.iframeWrapper }
                    videoId={ videoId }
                    ref={ this.youtubeRef }
                    opts={ YOUTUBE_OPTIONS }
                    onReady={ onReady }
                    onEnd={ this.handleEnd } />
            </div>
        );
    }

    play() {
        // Play the video on clicking the overlay
        this.youtubeRef.current.internalPlayer.playVideo();
    }

    handleEnd = () => {
        this.props.onEnd();
        // Reset video time
        this.youtubeRef.current.internalPlayer.stopVideo();
    };
}

VideoInline.propTypes = {
    videoId: PropTypes.string.isRequired,
    onReady: PropTypes.func,
    onEnd: PropTypes.func,
};

export default VideoInline;
