import React from 'react'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'

import '../styles/App.scss'
import Projects from './Projects'
import Contact from './Contact'


const App = () => {

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