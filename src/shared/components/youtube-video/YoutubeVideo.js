import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PlayIcon } from '../icon';
import VideoModal from './VideoModal';
import styles from './YoutubeVideo.module.css';

class YoutubeVideo extends Component {
    state = {
        open: false,
    };

    render() {
        const { thumbnail, videoId } = this.props;
        const { open } = this.state;

        return (
            <div className={ styles.youtubeVideo }>
                <div className={ styles.trigger } onClick={ this.handleTriggerClick }>
                    <div className={ styles.playButton } ><PlayIcon /></div>
                    <img className={ styles.image } src={ thumbnail } />

                </div>

                <VideoModal
                    open={ open }
                    videoId={ videoId }
                    onClose={ this.handleClose } />
            </div>
        );
    }

    handleTriggerClick = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
}

YoutubeVideo.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    videoId: PropTypes.string.isRequired,
};

export default YoutubeVideo;
