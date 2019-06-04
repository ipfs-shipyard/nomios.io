import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PlayIcon } from '../icon';

import styles from './VideoTrigger.module.css';

export default class VideoTrigger extends Component {
    static propTypes = {
        src: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    render() {
        const { src, onClick } = this.props;

        return (
            <div onClick={ onClick } className={ styles.videoContainer }>
                <div className={ styles.videoControl } ><PlayIcon /></div>
                <img className={ styles.video } src={ src } />
            </div>
        );
    }
}
