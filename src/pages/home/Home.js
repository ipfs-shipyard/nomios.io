import React, { Component } from 'react';
import Observer from '@researchgate/react-intersection-observer';
import Header, { HEADER_HEIGHT } from '../../shared/components/header';
import Footer from '../../shared/components/footer';
import Catchphrase from '../../shared/components/blocks/catchphrase';
import CheckGithub from '../../shared/components/blocks/check-github';
import CheckWorkshop from '../../shared/components/blocks/check-workshop';
import Concept from '../../shared/components/blocks/concept';
import Hero from '../../shared/components/blocks/hero';
import Roadmap from '../../shared/components/blocks/roadmap';
import Subscribe from '../../shared/components/blocks/subscribe';
import Why from '../../shared/components/blocks/why';
import SideBySide from '../../shared/components/side-by-side';
import styles from './Home.module.css';

class Home extends Component {
    state = {
        smallHeader: false,
    };

    render() {
        const { smallHeader } = this.state;

        return (
            <div className={ styles.home }>
                <Header small={ smallHeader } />

                <main className={ styles.main }>
                    <Observer
                        rootMargin={ `-${HEADER_HEIGHT}px 0px 0px 0px` }
                        onChange={ this.handleHeroIntersection } >
                        <Hero />
                    </Observer>

                    <Why />
                    <Concept />
                    <Catchphrase />
                    <Subscribe />
                    <SideBySide
                        left={ <CheckWorkshop /> }
                        right={ <CheckGithub /> } />
                    <Roadmap />
                </main>

                <Footer />
            </div>
        );
    }

    handleHeroIntersection = ({ isIntersecting }) => {
        this.setState({ smallHeader: !isIntersecting });
    };
}

export default Home;
