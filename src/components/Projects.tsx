import React, { useEffect, useState } from 'react'
import { otherProjects, Project, Projectss } from '../models/Projects'
import '../styles/Projects.css'

const Projects = () => {
    const [mobile, setMobile] = useState<boolean>(false)

    useEffect(() => {
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
    }, [])

    const checkIfMobile = () => {
        if (window.innerWidth < 768) {
            setMobile(true);
        }
        else {
            setMobile(false);
        }
    };

    const mobileAllProjects = Projectss.map(({ title, description, technologies, liveLink, codeLink, img, imgAlt }: Project, i: number) => {
        return (
            <div className="mobile-project-version" key={i}>
                <div className="short-brief">
                    <h1 className="short-title">
                        <a href={liveLink} target='_blank' rel='noreferrer'>
                            {title}
                        </a>
                    </h1>

                    <p className="short-description">
                        {description}
                    </p>

                    <p className='technologies'>
                        {technologies}
                    </p>

                    <div className="project-links">
                        <a href={liveLink} target='_blank' rel='noreferrer' className='project-link'>
                            <span>Visit</span>
                            <i className="fa fa-external-link"></i>
                        </a>

                        <a href={codeLink} target='_blank' rel='noreferrer' className='project-link'>
                            <span>Code</span>
                            <i className="fa fa-code"></i>
                        </a>
                    </div>
                </div>

                <div className="backdrop-image">
                    <a href={liveLink} target='_blank' rel='noreferrer'>
                        <img
                            src={img}
                            alt={imgAlt}
                        />
                    </a>
                </div>
            </div>
        )
    })

    const listPrimaryProjects = Projectss.map(({ img, imgAlt, title, description, technologies, liveLink, codeLink }: Project, i: number) => {
        return (
            <div className="project" key={i}>

                <div className="project-info">

                    <div className='project-quick-peek'>
                        <div className="project-img">
                            <a href={liveLink} target='_blank' rel='noreferrer'>
                                <img
                                    src={img}
                                    alt={imgAlt}
                                />
                            </a>
                        </div>

                        <div className='technologies'>
                            <h4>
                                {technologies}
                            </h4>
                        </div>

                    </div>

                    <div className="project-description">

                        <h2 className="project-title">
                            {title}
                        </h2>
                        <p className="project-brief">
                            {description}
                        </p>
                    </div>

                </div>


                <div className="project-links">
                    <a href={liveLink} target='_blank' rel='noreferrer' className='project-link'>
                        <span>Visit</span>
                        <i className="fa fa-external-link"></i>
                    </a>

                    <a href={codeLink} target='_blank' rel='noreferrer' className='project-link'>
                        <span>Code</span>
                        <i className="fa fa-code"></i>
                    </a>
                </div>

            </div>
        )
    });

    const listOtherProjects = otherProjects.map(({ title, technologies, description, liveLink, codeLink }: Project, i) => {
        return (
            <div className="noteworthy-project" key={i}>
                <div className="top-icons">
                    <a href={liveLink} target='_blank' rel='noreferrer' className='note-project-link'>
                        <i className="fa fa-external-link"></i>
                    </a>
                    <a href={codeLink} target='_blank' rel='noreferrer' className='note-project-link'>
                        <i className="fa fa-thin fa-github"></i>
                    </a>

                </div>

                <div className="short-brief">
                    <h1 className="short-title">
                        <a href={liveLink} target='_blank' rel='noreferrer'>
                            {title}
                        </a>
                    </h1>

                    <p className="short-description">
                        {description}
                    </p>
                </div>

                <div className="bottom-technologies">
                    <p>{technologies}</p>
                </div>
            </div>
        )
    })

    return (
        <div id='work' className='reveal'>

            <h1 className='titles reveal'>
                Work
            </h1>

            <div id="projectContainer" className='reveal'>
                {mobile ? mobileAllProjects : listPrimaryProjects}
            </div>

            <div id='noteworthyProjects' className='reveal'>
                <h1 className='titles noteworthy-title'>
                    Other Noteworthy Projects
                </h1>

                <div id='noteworthyProjectContainer' className='reveal'>
                    {listOtherProjects}
                </div>

            </div>


        </div >
    )
}

export default Projects