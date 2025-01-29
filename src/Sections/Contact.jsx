import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className="flex items-center justify-center min-h-screen mt-28">
      <div className="text-center w-full max-w-lg">
        <h2 className="text-4xl md:text-7xl text-white font-bold mt-3">Contact Me</h2>
        <p className="text-gray-400 text-lg md:text-xl mt-4">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <input
              
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 text-gray-100 rounded-lg focus:outline-none focus:ring-  shadow-sm bg-gray-800"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 text-gray-100 rounded-lg bg-gray-800 focus:outline-none   shadow-sm"
            />
          </div>
          <div>
            <textarea
              placeholder="Leave Message"
              rows="5"
              className="w-full px-4 py-3 text-gray-100 rounded-lg bg-gray-800 shadow-sm"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
