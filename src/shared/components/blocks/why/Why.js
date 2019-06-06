import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import LayoutContainer from '../../../components/layout-container/LayoutContainer';
import { title, blocks } from './data';
import { ArrowRightIcon } from '../../icon';
import styles from './Why.module.css';
import Slider from 'react-slick';
import Observer from '@researchgate/react-intersection-observer';

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
    constructor(props) {
        super(props);

        this.state = {
            showBlocks: false,
        };
    }

    render() {
        const { className } = this.props;

        return (
            <LayoutContainer id="why" className={ classNames(styles.why, className) } contentClassName={ styles.whyContent }>
                <Observer
                    onChange={ this.handleChange }
                    threshold={ [0.75] } >
                    <div>
                        <div className={ classNames(styles.list, styles.listDesktop) }>
                            <div className={ styles.blockTitle }><h2>{ title }</h2></div>
                            { blocks.map((block, index) => this.renderBlock({ key: index, order: index, ...block })) }
                        </div>
                        <div className={ classNames(styles.list, styles.listMobile) }>
                            <LayoutContainer className={ styles.blockTitleMobile }>
                                <div className={ styles.blockTitle }><h2>{ title }</h2></div>
                            </LayoutContainer>
                            <Slider { ...settings }>
                                { blocks.map((block, index) => this.renderBlock({ key: index, order: index, ...block })) }
                            </Slider>
                        </div>
                    </div>
                </Observer>
            </LayoutContainer>
        );
    }

    renderBlock({ icon, title, description, link, order }) {
        const { showBlocks } = this.state;

        const translationX = Math.random() * 100;
        const translationY = Math.random() * 100;

        const style = showBlocks ? {} : { transform: `translate(${translationX}px, ${translationY}px)` };

        return (
            <div
                className={ classNames(styles.block, styles[`block${order + 1}`], showBlocks ? styles.blockVisible : styles.blockHidden) }
                style={ style } >

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
    }

    handleChange = ({ isIntersecting, intersectionRatio }) => {
        console.log(intersectionRatio);
        isIntersecting && intersectionRatio > 0.7 && this.setState({ showBlocks: true });
    };
}

Why.propTypes = {
    className: PropTypes.string,
};

export default Why;
