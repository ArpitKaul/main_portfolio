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
            {id:8,name:"Express",src:express},
            {id:9,name:"TailwindCss",src:tailwind},
            {id:10,name:"Nodejs",src:node},
        ]
    },
    {
        category:"Libraries",
        items:[
            {id:11,name:"React",src:react},
            {id:12,name:"Three.js",src:three},
            {id:13,name:"GSAP",src:gsap},
            {id:14,name:"FramerMotions",src:framer},

        ]
    },
    {
        category:"Databases",
        items:[
            {id:15,name:"MongoDb",src:mongo},
            {id:16,name:"MySql",src:sql},
            {id:17,name:"Firebase",src:firebase},
        ]
    },
    {
        category:"Tools",
        items:[
            {id:18,name:"Git",src:git},
            {id:19,name:"VSCode",src:vscode},
            {id:20,name:"Github",src:github},
            {id:21,name:"Postman",src:postman},
        ]
    },
    {
        category:"Enviroments",
        items:[
            {id:22 , name:"Nodejs",src:nodee},
        ]
    }
]
