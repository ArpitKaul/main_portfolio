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
            {id:1,name:"HTML",src: Html,url:"https://html.spec.whatwg.org/multipage/"},
            {id:2,name:"CSS",src:Css , url:"https://www.w3.org/Style/CSS/Overview.en.html"},
            {id:3,name:"Javascript",src: javascript,url:"https://262.ecma-international.org/"},
            {id:4,name:"Python",src:Python,url:"https://www.python.org/"},
            {id:5,name:"Java",src:Java,url:"https://www.java.com/en/"},
            {id:6,name:"C++",src:Cpp,url:"https://isocpp.org/"},
            {id:7,name:"C",src:C,url:"https://en.cppreference.com/w/c"}
        ],
    },
    {
        category:"Frameworks",
        items:[
            {id:8,name:"Express",src:express,url:"https://expressjs.com/"},
            {id:9,name:"TailwindCss",src:tailwind,url:"https://tailwindcss.com/"},
            {id:10,name:"Nodejs",src:node,url:"https://nextjs.org/"},
        ]
    },
    {
        category:"Libraries",
        items:[
            {id:11,name:"React",src:react,url:"https://react.dev/"},
            {id:12,name:"Three.js",src:three,url:"https://threejs.org/"},
            {id:13,name:"GSAP",src:gsap,url:"https://gsap.com/"},
            {id:14,name:"FramerMotions",src:framer,url:"https://motion.dev/"},

        ]
    },
    {
        category:"Databases",
        items:[
            {id:15,name:"MongoDb",src:mongo,url:"https://www.mongodb.com/"},
            {id:16,name:"MySql",src:sql,url:"https://www.mysql.com/"},
            {id:17,name:"Firebase",src:firebase , url:"https://firebase.google.com/"},
        ]
    },
    {
        category:"Tools",
        items:[
            {id:18,name:"Git",src:git , url:"https://git-scm.com/"},
            {id:19,name:"VSCode",src:vscode,url:"https://code.visualstudio.com/"},
            {id:20,name:"Github",src:github,url:"https://github.com/"},
            {id:21,name:"Postman",src:postman,url:"https://www.postman.com/"},
        ]
    },
    {
        category:"Enviroments",
        items:[
            {id:22 , name:"Nodejs",src:nodee,url:"https://nodejs.org/en"},
        ]
    }
]
