import React from 'react'
import { skills } from '../constants/skill'


const Skills = () => {
  return (
    <div id='skills'>
      <div className='text-center md:mt-56 mt-32'>
      <p className='text-xl text-gray-500'>WHAT I HAVE LEARNT SO FAR</p>
      <h1 className='text-7xl text-white font-bold mt-3 '>SKILLS.</h1>
    </div>
      <div className='border-2 border-gray-800 shadow-2xl bg-gray-800 md:w-[40rem] md:h-[30rem] mt-28 md:ml-80 flex  h-auto w-auto  '>
        <div className='flex flex-col space-y-10 my-9' >
         {skills.map((skillCategory)=>(
          <div className='sm:flex '>
          <span key={skillCategory.category}
          className='text-gray-400  text-xl font-serif ml-8 cursor-pointer '
          >
            {skillCategory.category}
              
          </span>
          <div className="text-white border-gray-500  mx-4 md:block hidden">:</div>
            <div>              
            <div className="flex space-x-6">
             {skillCategory.items.map((skill) => (
            <a
            key={skill.id}
            href={skill.url}
            target='_blank'
            rel="noopener noreferrer"
             className="relative group flex flex-col md:ml-2 cursor-pointer ml-8 mt-2 md:mt-0"
            >
            <img className="md:w-9 md:h-9 h-7 w-7" src={skill.src} alt={skill.name} />

            {/* Tooltip */}
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {skill.name}
          </span>
          </a>
          ))}
          </div>

            </div>    
            </div>
         ))}
        </div>
         
      </div>
    </div>
  )
}

export default Skills


