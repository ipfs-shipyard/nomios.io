import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isMobile from 'is-mobile';
import { PlayIcon } from '../icon';
import VideoModal from './VideoModal';
import VideoInline from './VideoInline';
import styles from './YoutubeVideo.module.css';

class YoutubeVideo extends Component {
    videoInlineRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            inlineReady: false,
            inlinePlaying: false,
        };
        this.isMobile = isMobile();
    }

    render() {
        const { thumbnail, videoId } = this.props;
        const { inlineReady, inlinePlaying, open } = this.state;
        const triggerClassnames = classNames(styles.trigger,
            this.isMobile && !inlineReady && styles.inlineNotReady,
            inlineReady && styles.inlineReady,
            inlineReady && inlinePlaying && styles.inlinePlaying);

        return (
            <div className={ styles.youtubeVideo }>
                <div className={ triggerClassnames }
                    onClick={ this.handleTriggerClick }>
                    <div className={ styles.playButton } ><PlayIcon /></div>
                    <img className={ styles.image } src={ thumbnail } alt="" />
                </div>
                {
                    this.isMobile ?
                        <VideoInline
                            videoId={ videoId }
                            ref={ this.videoInlineRef }
                            onReady={ this.handleInlineVideoReady }
                            onEnd={ this.handleInlineVideoEnd } /> :
                        <VideoModal
                            open={ open }
                            videoId={ videoId }
                            onClose={ this.handleClose } />
                }
            </div>
        );
    }

    handleTriggerClick = () => {
        if (this.isMobile) {
            this.videoInlineRef.current.play();
            this.setState({ inlinePlaying: true });
        } else {
            this.setState({ open: true });
        }
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleInlineVideoReady = () => {
        this.setState({ inlineReady: true });
    };

    handleInlineVideoEnd = () => {
        this.setState({ inlinePlaying: false });
    };
}

YoutubeVideo.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
};

export default YoutubeVideo;
