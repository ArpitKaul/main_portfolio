import React from 'react'
import gssoc from '../assets/gssoc.png';
import Toast from '../assets/toast.png';

const Achievment = () => {
  return (
    <div id='achievements'>
      <div className='text-center md:mt-56 mt-32'>  
        <p className='text-gray-500 text-2xl'>WHAT I HAVE DONE SO FAR</p>
        <h1 className='md:text-7xl text-white font-bold mt-3 text-4xl'>ACHIEVEMENT</h1>
      </div>
      {/* ist div */}
      <div className='md:flex flex '>
      <div className=' border-2 border-gray-800 md:w-[29rem] md:h-56 mt-28 ml-7  text-white bg-gray-800 rounded-lg cursor-pointer w-80 h-auto'>
        <h1 className='font-semibold font-serif text-xl mt-5 ml-10'>Open Source Contributor</h1>
        <p className='mt-5 ml-10 font-semibold'>GSSOC' 24</p>
        <p className='ml-10 mt-6 text-gray-400 font-semibold font-serif'>.Participated in the program and explored opportunities to contribute to open-source projects, gaining insights into collaborative development.</p>
      </div>
      <div className='border-4 rounded-full w-16 h-16 border-white font-bold mt-28 md:ml-16 md:block hidden'> 
        <img className='w-11 h-10 ml-1.5 mt-2' src={gssoc} alt="" />
      </div>
      <h1 className='text-white mt-32 ml-5 font-serif font-semibold hidden md:block'>May 2024 - Aug 2024</h1>
      </div>

      {/* 2nd div */}
      <div className='md:flex md:ml-[19rem]'>
        <h1 className='text-white mt-32 ml-5 font-serif font-semibold hidden md:block '>Oct 2023 - Mar 2024</h1>
        <div className='border-4  rounded-full w-16 h-16 border-white font-bold mt-28 ml-16 md:block hidden '>
          <img className='w-11 h-10 ml-1.5 mt-2' src={Toast} alt="" />
        </div>
        <div className='border-2 border-gray-800 md:w-[29rem] md:h-56 mt-28 ml-8 text-white bg-gray-800 rounded-lg cursor-pointer w-80 '>
          <h1 className='font-semibold font-serif text-xl mt-5 ml-10'>Toastmasters International</h1>
          <p className='mt-5 ml-10 font-semibold'>Chitkara University</p>
          <p className='ml-10 mt-6 text-gray-400 font-semibold font-serif'>Joined the Toastmasters Club to enhance communication and leadership skills through structured learning and engaging sessions.</p>
        </div>
        
      </div>

    </div>
  )
}

export default Achievment
