import React, { Component } from 'react';
import Header from '../../shared/components/header';
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
        resizeHeader: false,
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { resizeHeader } = this.state;

        return (
            <div className={ styles.home }>
                <Header resize={ resizeHeader } className={ resizeHeader && styles.smallHeader } />

                <main className={ styles.main }>
                    <Hero />
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

    handleScroll = () => {
        const { resizeHeader } = this.state;
        const whyEl = document.getElementById('why');
        const whyBoundingRect = whyEl.getBoundingClientRect();

        if (whyBoundingRect.top < 120) {
            !resizeHeader && this.setState({ resizeHeader: true });
        } else {
            resizeHeader && this.setState({ resizeHeader: false });
        }
    };
}

export default Home;
