import i18next from 'i18next';
import React, { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next'
import { languages, Language } from '../models/Languages';

import resume from '../WillyamRamosResume.pdf'
import '../styles/Navbar.css'

const Navbar = () => {
    const { t } = useTranslation();
    const [toggled, setToggled] = useState<boolean>(true)

    useEffect(() => {
        toggleTheme();
        tabSelecting();
        responsiveNavArrangement();
        document.querySelector('.languages')!.children[0].classList.add('language-selected');
        window.addEventListener('resize', tabSelecting)
        window.addEventListener('resize', responsiveNavArrangement)
        return () => {
            window.removeEventListener('resize', tabSelecting)
        }
    }, [])

    const handleChange = (code: string, e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        document.querySelectorAll('.language').forEach((lang: Element) => {
            lang.classList.remove('language-selected')
        })
        i18next.changeLanguage(code)
        e.currentTarget.classList.add('language-selected');
    };

    const hamburgerAppear = () => {
        document.querySelector('.hamburger')!.classList.toggle('appear');
        document.querySelector('.links')!.classList.toggle('appear');
    }

    const tabSelecting = () => {
        const tabs = document.getElementsByClassName('quick-link');
        if (window.innerWidth < 768) {
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].addEventListener('click', () => {
                    document.querySelector('.hamburger')!.classList.remove('appear');
                    document.querySelector('.links')!.classList.remove('appear');
                })
            };
        }
    };

    const toggleTheme = () => {
        setToggled(!toggled)
        if (toggled) {
            document.querySelector('body')!.classList.remove('light-mode')
            document.querySelector('body')!.classList.add('dark-mode');
        } else {
            document.querySelector('body')!.classList.add('light-mode');
            document.querySelector('body')!.classList.remove('dark-mode')
        }

    }

    const responsiveNavArrangement = () => {
        const sideLinks = document.querySelector<HTMLElement>('#sideLinks')!;
        const navbarContent = document.querySelector<HTMLElement>('#quickLinks')!;
        const sideNav = document.querySelector<HTMLElement>('#sidebar')!;

        if (window.innerWidth < 768) {
            navbarContent.insertBefore(sideLinks, navbarContent.children[2]);
            sideNav.style.display = 'none';
            sideLinks.style.flexDirection = 'row';
            sideLinks.style.flexWrap = 'wrap';
            document.querySelector('body')!.style.marginLeft = '0';
        } else {
            sideNav.insertBefore(sideLinks, sideNav.children[0]);
            sideNav.style.display = 'block';
            sideLinks.style.flexDirection = 'column';
            sideLinks.style.flexWrap = 'revert';
            document.querySelector('body')!.style.marginLeft = '62px';
        }
    }

    return (
        <nav id='navbar'>
            <div>
                <h1 id='home'>
                    <a href="/">
                        WRK
                    </a>
                </h1>
            </div>

            <div className='links'>
                <div id='quickLinks'>
                    <ul>
                        <li className='quick-link'>
                            <a href="#aboutMe">
                                {t('About Me')}
                            </a>
                        </li>

                        <li className='quick-link'>
                            <a href="#work">
                                {t('Work')}
                            </a>
                        </li>

                        <li className='quick-link'>
                            <a href="#contact">
                                {t('Contact')}
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div id='sidebar'>
                <ul id='sideLinks'>
                    <li className='side-link'>
                        <a href="https://github.com/wramos1" target='_blank' rel='noreferrer'>
                            <i className="fa fa-github"></i>
                            <span>Github</span>
                        </a>
                    </li>
                    <li className='side-link'>
                        <a href="https://www.linkedin.com/in/willyam-ramos-862b31239/" target='_blank' rel='noreferrer'>
                            <i className="fa fa-linkedin"></i>
                            <span>LinkedIn</span>
                        </a>
                    </li>
                    <li className='side-link'>
                        <a href={resume} target='_blank' rel='noreferrer'>
                            <i className="fa fa-file"></i>
                            <span>Resume</span>
                        </a>
                    </li>
                    <div id='sidePopUp'>
                        <li className='side-link'>
                            <i className="fa thin fa-gear"></i>
                            <span>{t('Settings')}</span>
                        </li>
                        <div className='dropdown'>
                            <div>
                                <ul className='languages'>
                                    {languages.map((lang: Language) => {
                                        return (
                                            <li
                                                key={lang.country_code}
                                                onClick={(e) => handleChange(lang.code, e)}
                                                className='language'
                                            >
                                                <ReactCountryFlag
                                                    countryCode={lang.country_code}
                                                />
                                                {t(`${lang.name}`)}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>


                            <div id='theme'>
                                <h3 id='themeLabel'>
                                    {toggled ? t('Light Mode') : t('Dark Mode')}
                                </h3>
                                <div>
                                    <label htmlFor="theme-btn" className="switch">
                                        <input type="checkbox" id='theme-btn' onClick={() => toggleTheme()} defaultChecked />
                                        <span className="slider round"></span>
                                    </label>
                                </div>

                            </div>

                        </div>
                    </div>
                </ul>
            </div>

            <div className="hamburger" onClick={hamburgerAppear}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

        </nav>
    )
}

export default Navbar