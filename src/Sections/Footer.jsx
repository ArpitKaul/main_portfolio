import React from 'react';
import githubIcon from '../assets/git.webp';
import instaIcon from '../assets/insta.png';
import linkedIcon from '../assets/link.png';
import twitterIcon from '../assets/twitter.png';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div>
          <h1 className="text-xl text-gray-400">A.Kaul</h1>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0"> {/* Added mt-4 for mobile spacing */}
          <a
            href="https://github.com/ArpitKaul"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="h-8 w-8 cursor-pointer"
            />
          </a>
          <a
            href="https://www.instagram.com/arpit_kaul.26/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={instaIcon}
              alt="Instagram"
              className="h-6 w-6 mt-1 cursor-pointer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/arpit-kaul-043636275/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedIcon}
              alt="LinkedIn"
              className="h-6 w-6 mt-1 cursor-pointer"
            />
          </a>
          <a
            href="https://x.com/Arpit_Kaul26"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={twitterIcon}
              alt="Twitter"
              className="h-6 w-6 mt-1 cursor-pointer"
            />
          </a>
        </div>
      </div>

      <div className="w-full h-[1px] bg-white transform scale-y-50 mt-4"></div>

      <div className="text-gray-400 text-center mt-2">
        <h1>@ 2025 A.Kaul All Rights Reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
