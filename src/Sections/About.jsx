import React from 'react';
import { introduction } from '../constants';
import { socialIcons } from '../constants';
import emailIcon from '../assets/email.svg';
import aboutIcon from '../assets/about.png';

const About = () => {
  return (
    <div id='about'>
      <div className=" md:ml-10 ml-7 flex flex-col md:flex-row">
        
        <div className="order-1 md:order-2 flex justify-center md:justify-start">
          <img
            className="md:ml-16 md:w-[34rem] md:h-[23rem] w-72 h-72 md:mt-28 mp-10"
            src={aboutIcon}
            alt=""
          />
        </div>

        
        <div className="order-2 md:order-1 w-full md:w-[45rem] text-white mt-10 md:mt-0">
          <h1 className="text-gray-500 text-2xl font-serif ml-4">INTRODUCTION</h1>
          <h1 className="text-5xl md:text-7xl font-bold mt-6">Overview.</h1>
          <p className="text-gray-400 mt-6 font-serif text-sm md:text-xl">
            {introduction.description}
          </p>
          <p className="mt-7 text-blue-300 text-lg md:text-xl font-serif">
            Feel free to reach out and connect with me!
          </p>
          <div className="flex mt-6">
            <img className="h-6 w-6 mt-1" src={emailIcon} alt="" />
            <h1 className="text-white text-lg md:text-xl ml-2">
              <a href="mailto:akaul7407@gmail.com">akaul7407@gmail.com</a>
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            {socialIcons.map(({ src, id,url }) => (
              <div className="h-8 w-8 cursor-pointer" key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  <img src={src} alt="" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
};

export default About;
