import React from 'react'
import { projects } from '../constants/project'

const Project = () => {
  return (
    <div>
      <div className='text-center md:mt-56 mt-32'>
        <p className='text-gray-500 text-2xl'>MY WORK</p>
        <h1 className='text-7xl text-white font-bold mt-3'>Projects.</h1>
      </div>
      <div className='md:grid-cols-3 grid grid-cols-1 mt-10 px-6 gap-20'>
        {projects.map((project)=>(
          <div
          className='border-2 border-blue-300 rounded-2xl mt-20 bg-gray-800 overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300'
          key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img 
              src={project.src} 
              alt={project.heading}
              className='w-full h-48 object-cover' />
            </a>
            <div className='text-center p-4'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <h2 className='text-white text-2xl font-bold font-serif hover:text-blue-400'>
                  {project.heading}
                </h2>
              </a>
              <p className=' text-gray-400 mt-2 cursor-pointer '>{project.technologies.join(', ')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
