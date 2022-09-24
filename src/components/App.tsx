import React from 'react'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'

import '../styles/App.scss'
import Projects from './Projects'
import Contact from './Contact'


const App = () => {

    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 75;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        };
    };

    window.addEventListener('scroll', reveal);

    return (
        <div>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <Navbar />
            <div>
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default App