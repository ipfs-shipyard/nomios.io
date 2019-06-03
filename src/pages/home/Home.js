import React from 'react';
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

const Home = () => (
    <div className={ styles.home }>
        <Header />

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

export default Home;
