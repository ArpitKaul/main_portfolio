import githubIcon from '../assets/github.png';
import instaIcon from '../assets/instagram.svg';
import linkedIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/x.svg';
import Html from '../assets/skill/html5.svg';
import Css from '../assets/skill/css3.svg';
import javascript from '../assets/skill/javascript.svg';
import Python from '../assets/skill/python.svg';
import Java from '../assets/skill/java.svg';
import C from '../assets/skill/c.svg';
import Cpp from '../assets/skill/cpp.png';
import express from '../assets/skill/expressjs.png';
import tailwind from '../assets/skill/tailwindcss.svg';
import node from '../assets/skill/nodejs.svg';
import react from '../assets/skill/react.svg';
import three from '../assets/skill/threejs.svg';
import gsap from '../assets/skill/gsap.png';
import framer from '../assets/skill/framer.svg';
import mongo from '../assets/skill/mongodb.svg';
import sql from '../assets/skill/my-sql.png';
import firebase from '../assets/skill/firebase.svg';
import git from '../assets/skill/git.svg';
import vscode from '../assets/skill/vs.png';
import github from '../assets/skill/github.png';
import postman from '../assets/skill/postman.svg';
import nodee from '../assets/skill/nodejs.svg';
export const navLinks=[
    {
        id:1,
        name: 'Home',
        href: 'home',
    },
    {
        id:2,
        name: 'About',
        href: 'about',
    },
    {
        id:3,
        name: 'projects',
        href: 'project',
    },
    {
        id:4,
        name: 'Contact',
        href: 'contact',
    } 
];




        // About page
export const introduction ={
    description: `Hello! I am Arpit Kaul, a passionate Frontend Developer and problem solver. Currently, I am pursuing a B.E. degree in Computer Science and Engineering at Chitkara University in Punjab, India, with an expected graduation year of 2026. I am a Frontend Developer with experience in JavaScript, Tailwind, and GSAP. I specialize in frameworks such as React, Three.js, and Node.js. My knowledge extends to fundamental Data Structures and Algorithms. I have also joined Toastmasters to enhance my communication and leadership skills.
   `
    }
    
export const socialIcons = [
    {
        id:1,
        name: 'github',
        src: githubIcon,
        alt:"github"
    },
    {
        id:2,
        name: 'instagram',
        src: instaIcon,
        alt:"instagram"
    },
    {
        id:3,
        name: 'linkedin',
        src: linkedIcon,
        alt:"linkedin"
    },
    {
        id:4,
        name: 'twitter',
        src: twitterIcon,
        alt:"twitter"
    }

]



// skill

export const skills=[
    {
        category:"Languages",
        items:[
            {id:1,name:"HTML",src: Html},
            {id:2,name:"CSS",src:Css},
            {id:3,name:"Javascript",src: javascript},
            {id:4,name:"Python",src:Python},
            {id:5,name:"Java",src:Java},
            {id:6,name:"C++",src:Cpp},
            {id:7,name:"C",src:C}
        ],
    },
    {
        category:"Frameworks",
        items:[
            {id:1,name:"Express",src:express},
            {id:2,name:"TailwindCss",src:tailwind},
            {id:3,name:"Nodejs",src:node},
        ]
    },
    {
        category:"Libraries",
        items:[
            {id:1,name:"React",src:react},
            {id:2,name:"Three.js",src:three},
            {id:3,name:"GSAP",src:gsap},
            {id:4,name:"FramerMotions",src:framer},

        ]
    },
    {
        category:"Databases",
        items:[
            {id:1,name:"MongoDb",src:mongo},
            {id:3,name:"MySql",src:sql},
            {id:3,name:"Firebase",src:firebase},
        ]
    },
    {
        category:"Tools",
        items:[
            {id:1,name:"Git",src:git},
            {id:2,name:"VSCode",src:vscode},
            {id:3,name:"Github",src:github},
            {id:4,name:"Postman",src:postman},
        ]
    },
    {
        category:"Enviroments",
        items:[
            {id:1 , name:"Nodejs",src:nodee},
        ]
    }
]
