import React from 'react';
import './Home.css';
import Me from '../../assets/jack-ai-image.jpg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Me} alt="" className='home__img' width='50%' />
                <h1 className="home__name">JACHIN BAKHTSINGH</h1>
                <span className="home__education">I'm a Web Developer</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

            </div>

            <Shapes />
        </section>
    )
}

export default Home