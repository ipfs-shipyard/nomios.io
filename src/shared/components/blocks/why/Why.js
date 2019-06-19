import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LayoutContainer from '../../../components/layout-container/LayoutContainer';
import { title, blocks } from './data';
import { ArrowRightIcon } from '../../icon';
import styles from './Why.module.css';
import Slider from 'react-slick';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000, // This time need to be in coherence with transition duration of css file `--slider-transition-duration`.
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    pauseOnHover: true,
    arrows: false,
};

class Why extends Component {
    slider = React.createRef();

    state = {
        stopTimer: false,
    };

    render() {
        const { className } = this.props;
        const { stopTimer } = this.state;

        return (
            <LayoutContainer id="why" className={ classNames(styles.why, className) } contentClassName={ styles.whyContent }>
                <div className={ classNames(styles.list, styles.listDesktop) }>
                    <div className={ styles.blockTitle }><h2>{ title }</h2></div>
                    { blocks.map((block, index) => <Block key={ index } order={ index } { ...block } />) }
                </div>
                <div className={ classNames(styles.list, styles.listMobile, stopTimer && styles.timerStopped) }>
                    <LayoutContainer className={ styles.blockTitleMobile }>
                        <div className={ styles.blockTitle }><h2>{ title }</h2></div>
                    </LayoutContainer>
                    <Slider { ...settings } onSwipe={ this.handleSwipe } ref={ this.slider }>
                        { blocks.map((block, index) => <Block key={ index } order={ index } { ...block } />) }
                    </Slider>
                </div>
            </LayoutContainer>
        );
    }

    handleSwipe = () => {
        const { stopTimer } = this.state;

        this.slider.current.slickPause();
        !stopTimer && this.setState({ stopTimer: true });
    };
}

const Block = ({ icon, title, description, link, order }) => (
    <div className={ classNames(styles.block, styles[`block${order + 1}`]) }>
        <i className={ styles.illustration } dangerouslySetInnerHTML={ { __html: icon } } />
        <div className={ styles.title }>{ title }</div>
        <div className={ styles.description }>{description}</div>
        {
            link &&
            <a href={ link } rel="noopener noreferrer" target="_blank" className={ styles.link }>
                <ArrowRightIcon />
            </a>
        }
    </div>
);

Block.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    order: PropTypes.number,
};

Why.propTypes = {
    className: PropTypes.string,
};

export default Why;
