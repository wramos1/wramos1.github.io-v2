import JS from '../images/icons/javascript.svg';
import TS from '../images/icons/typescript-icon.svg';
import reAct from '../images/icons/react.svg';
import reDucks from '../images/icons/redux.svg';
import HTML from '../images/icons/html-5.svg';
import CSS from '../images/icons/css-3.svg';
import Git from '../images/icons/git.svg';
import Postman from '../images/icons/postman-icon.svg';
import Node from '../images/icons/nodejs.svg';
import Express from '../images/icons/express.svg';
import Mongo from '../images/icons/mongodb-icon.svg';
import Sass from '../images/icons/sass.svg';


export interface Icon {
    image: string;
    alt: string;
    name: string;
}

export const icons: Icon[] = [
    {
        image: Git,
        alt: 'git icon',
        name: 'Git'
    },
    {
        image: JS,
        alt: 'javascript icon',
        name: 'Javascript'
    },
    {
        image: TS,
        alt: 'typescript icon',
        name: 'Typescript'
    },
    {
        image: reAct,
        alt: 'react icon',
        name: 'React'
    },
    {
        image: reDucks,
        alt: 'redux icon',
        name: 'Redux'
    },
    {
        image: HTML,
        alt: 'html icon',
        name: 'HTML5'
    },
    {
        image: CSS,
        alt: 'css icon',
        name: 'CSS3'
    },
    {
        image: Sass,
        alt: 'Sass icon',
        name: 'Sass'
    },
    {
        image: Node,
        alt: 'node icon',
        name: 'Node'
    },
    {
        image: Mongo,
        alt: 'mongo icon',
        name: 'MongoDB'
    },
    {
        image: Express,
        alt: 'express icon',
        name: 'Express'
    },
    {
        image: Postman,
        alt: 'postman icon',
        name: 'Postman'
    }
]