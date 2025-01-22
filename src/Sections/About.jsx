import React from 'react'
import { introduction } from '../constants';
import { socialIcons } from '../constants';

const About = () => {
  return (
    <div >
      <div className='flex mt-56 ml-10'>
        <div className='w-[40rem] text-white'>
            <h1 className='text-gray-500 text-2xl font-serif ml-4'>INTRODUCTION</h1>
            <h1 className='text-7xl font-bold mt-6'>Overview.</h1>
            <p className='text-gray-300 mt-9 font-serif '>{introduction.description}</p>
            <h1 className='text-white mt-9 '>akaul7407@gmail.com</h1>
            <div className='flex space-x-4'>
                {/* {socialIcons.map(())} */}
                <img src="" alt="" />
            </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default About
