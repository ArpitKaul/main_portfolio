import zintlr from '../assets/skill/zintlr.png';
import planet from '../assets/skill/planet.png';
import shop from '../assets/skill/shop.png';

export const projects = [
    {
        id: 1,
        src: zintlr, 
        heading: "Zintlr - Smart Lead Management System",
        technologies: ["React","Tailwind CSS","Framer-motion"],
        link: "https://zintlr-268174.netlify.app/"
    },
    
    {
        id: 3,
        src: shop, 
        heading: "Shopping Cart - E-commerce Application",
        technologies: ["React", "Redux", "CSS", "JavaScript"],
        link: "https://shoping-cart-rouge.vercel.app/"
    },
    {
        id: 2,
        src: planet, 
        heading: "3D Planets - Interactive Space Exploration",
        technologies: ["React", "Three.js", "@react-three/fiber", "Tailwind CSS"],
        link: "https://3d-planets-pyjs.vercel.app/"
    },
];
