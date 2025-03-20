import React from 'react';
import pic from '../assets/pic.jpeg';

const Popup = ({ setShowPopup }) => {
  return (
    <div className=" left-0 w-full h-full  z-50 flex justify-center items-center">
      <div className="bg-gray-800 z-50 opacity-100 p-4 rounded-lg relative md:h-[24rem] md:w-[24rem]"> 
        <button
          className="absolute top-0 right-1  rounded-full text-3xl  text-white font-bold" 
          onClick={() => setShowPopup(false)}
        >
          &times;
        </button>
        <img src={pic} alt="" className="w-72 h-80 md:ml-8 rounded-xl md:mt-4" />
      </div>
    </div>
  );
};

export default Popup;