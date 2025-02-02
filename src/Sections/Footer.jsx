import React from 'react'
import githubIcon from '../assets/github.png';
import instaIcon from '../assets/instagram.svg';
import linkedIcon from '../assets/linkedin.svg';
import twitterIcon from '../assets/x.svg';

const Footer = () => {
  return (
    <div className="flex justify-between items-center"> {/* Key change here */}
      <div>
        <h1 className='text-xl text-white'>A.Kaul</h1>
      </div>
      <div className='flex space-x-4'> {/* Added spacing between icons */}
        <a href="your_github_link" target="_blank" rel="noopener noreferrer"> {/* Add links */}
          <img src={githubIcon} alt="GitHub" className="h-8 w-8 cursor-pointer" /> {/* Added alt text and styling */}
        </a>
        <a href="your_instagram_link" target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="Instagram" className="h-8 w-8 cursor-pointer" />
        </a>
        <a href="your_linkedin_link" target="_blank" rel="noopener noreferrer">
          <img src={linkedIcon} alt="LinkedIn" className="h-8 w-8 cursor-pointer" />
        </a>
        <a href="your_twitter_link" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="h-8 w-8 cursor-pointer" />
        </a>
      </div>
    </div>
  )
}

export default Footer