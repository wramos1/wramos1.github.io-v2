import React from 'react'
import '../styles/About.css'
import { icons, Icon } from '../models/Icons'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    const displayLanguageIcons = icons.map((icon: Icon, i: number) => {
        return (
            <div
                key={i}
                className='icon-lang'
            >
                <img
                    src={icon.image}
                    alt={icon.alt}
                />
                <span>
                    {icon.name}
                </span>
            </div>
        )
    })

    return (
        <div id='aboutMe'>

            <h1 className='titles'>
                {t('About Me')}
            </h1>

            <div id='aboutContent'>
                <p>
                    {t("Hey! I'm Willyam and I'm a software engineer with a proficient understanding of the development and optimization of front-end features, but I am also able to tackle challenges in a full-stack capacity.")}
                </p>

                <p>
                    {t("I pride myself on my ability to learn and the tenacity I have to solve tough problems. Although I can work autonomously, I am more than enthusiatic about collaborating with and impacting teams so as to help them achieve better results.")}
                </p>

                <p>
                    {t("Moreover, I am passionate about maintaining the best practices when writing code and currently, I aim to expand and hone my skill set below.")}
                </p>
            </div>

            <div id='iconContainer'>
                {displayLanguageIcons}
            </div>


        </div>
    )
}

export default About