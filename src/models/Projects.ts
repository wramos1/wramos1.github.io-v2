import SuperTeam from '../images/projects/Super-Team.png';
import GoalSetter from '../images/projects/Goal-Setter.png';
import WhatToMake from '../images/projects/What-To-Make.png';
import WhereToWatch from '../images/projects/Where-To-Watch.png';

export interface Project {
    img?: string;
    imgAlt?: string;
    title: string;
    description: string;
    technologies: string;
    liveLink: string;
    codeLink: string;
}

const hostedLink = 'https://willyamramos.dev/'
const githubLink = 'https://github.com/wramos1/'

export const Projectss: Project[] = [
    {
        img: SuperTeam,
        imgAlt: 'Super Team Project',
        title: 'Super Team',
        description: 'A project built for fanatics of the superhero/supervillain world. Users can build a super-team of their top 5 favorite super-beings or design the strongest team they can think of. Also includes a randomize component that enables users to randomize a team if they choose not to construct one.',
        technologies: 'Typescript React APIs HTML CSS',
        liveLink: hostedLink + 'super-team',
        codeLink: githubLink + 'super-team'
    },
    {
        img: GoalSetter,
        imgAlt: 'Goal Setter Project',
        title: 'Goal Setter',
        description: 'This full-stack application, built with the MERN stack, enables users to set goals onto their profile. Their profile is secured through authentication and enables them to log back into their accounts to view their created goals which were saved onto a database.',
        technologies: 'React Node MongoDB Express REST Redux',
        liveLink: 'https://willyammerngoalsetter.herokuapp.com/',
        codeLink: githubLink + 'goals-app'
    },
    {
        img: WhatToMake,
        imgAlt: 'What to Make Project',
        title: 'What To Make',
        description: 'A web app that CATERS to all ranging from beginners to experts that aids in discovering recipes for ingredients one may have at home. Simply input a list of ingredients to find new recipes you have never heard of before or simple recipes you may have forgotten.',
        technologies: 'React Redux APIs HTML CSS',
        liveLink: hostedLink + 'what-to-make',
        codeLink: githubLink + 'what-to-make'
    },
    {
        img: WhereToWatch,
        imgAlt: 'Where to Watch Project',
        title: 'Where To Watch',
        description: 'A motion picture based project developed to provide users with the ability to check if a certain movie or show is streamed on a specific service. This app also allows users to utilize a randomizer component built with a random word generator so as to discover new movies/shows. It is designed in a simple to use manner and takes users on a page by page questionnaire that follows good UI/UX design. ',
        technologies: 'React Redux APIs HTML CSS',
        liveLink: hostedLink + 'WhereToWatch',
        codeLink: githubLink + 'WhereToWatch'
    }
]

export const otherProjects: Project[] = [
    {
        title: 'Dad Joke Tier List',
        description: 'Everyone loves a good dad joke. This simple and fun web app constructed with basic Vanilla JS, CSS, and HTML focuses on the search for the best dad jokes.',
        technologies: 'Javascript HTML CSS APIs',
        liveLink: hostedLink + 'DadJokeTierList',
        codeLink: githubLink + 'DadJokeTierList'
    },
    {
        title: 'Fit Scale',
        description: 'I took on the challenge of building a web app that fetches popular forms of data that every fitness enthusiast is bound to look for during their fitness endeavors.',
        technologies: 'React HTML CSS APIs',
        liveLink: hostedLink + 'Fit-Scale',
        codeLink: githubLink + 'Fit-Scale'
    },
    {
        title: 'Git Commit History Search',
        description: "This project lists out a user's git commit history for the repository they input. Users can sort the history and the design was made with Bootstrap so as to teach myself more about the library.",
        technologies: 'React HTML CSS Bootstrap APIs',
        liveLink: hostedLink + 'crossroads-group',
        codeLink: githubLink + 'crossroads-group'
    },
    {
        title: 'Airtable Challenge',
        description: "My completed version of Airtable's coding challenge within their hiring process. It is built with React and Redux whilst utilizing Typescript typing. ",
        technologies: 'React Typescript Redux APIs',
        liveLink: hostedLink + 'airtable-challenge',
        codeLink: githubLink + 'airtable-challenge'
    }
]