import React from 'react'
import { useTranslation } from 'react-i18next'
import '../styles/Home.css'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Home = () => {
    const { t } = useTranslation();
    return (
        <div id='main'>
            <h2>{t('Hi, my name is')}</h2>
            <h1>Willyam Ramos</h1>

            <div id='characterTitle'>
                {" "}
                <ReactTypical
                    className='typing'
                    steps={['Developer', 1000, 'Software Engineer', 2000, 'Problem Solver', 3000, 'Coder', 4000]}
                    loop={Infinity}
                    wrapper="b"
                />
            </div>
        </div >
    )
}

export default Home