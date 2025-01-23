import React from 'react'
import { skills } from '../constants'
import { div } from 'motion/react-client'


const Skills = () => {
  return (
    <div>
      <div className='text-center md:mt-56'>
      <p className='text-xl text-gray-500'>WHAT I HAVE LEARNT SO FAR</p>
      <h1 className='text-7xl text-white font-bold mt-3 '>SKILLS.</h1>
    </div>
      <div className='border-2 border-blue-300 md:w-[40rem] md:h-[30rem] mt-28 md:ml-80 flex  '>
        <div className='flex flex-col space-y-10 mt-9' >
         {skills.map((skillCategory)=>(
          <h2 key={skillCategory.category}
          className='text-gray-400  text-xl font-serif ml-12'
          >
            {skillCategory.category}
          </h2>
         ))}
        </div>
        <div className='pl-2 flex-1'>
          {skills.map((skillCategory)=>(
            <div
            key={skillCategory.id} className=''>
              <div className='flex space-x-6'>
                {skillCategory.items.map((skill)=>(
                  <div key={skill.id} className='flex flex-col items-center  mt-8 ml-12 cursor-pointer'>
                    <img className='w-9 h-9' src={skill.src} alt="" />
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills


