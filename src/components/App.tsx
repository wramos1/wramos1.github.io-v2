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