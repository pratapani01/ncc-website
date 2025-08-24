// src/pages/Home.js
import React from 'react';

// Import your images from the assets folder
import collegePhoto from '../assets/college.jpg'; // <-- Make sure 'college.jpg' is the correct filename
import nccLogo from '../assets/ncc_logo.png';     // <-- Make sure 'ncc_logo.png' is the correct filename

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-gradient-to-br from-[#FF9933] via-white to-[#138808]">
      <div className="text-center bg-white/70 backdrop-blur-sm p-10 rounded-xl shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Roorkee Institute of Technology
        </h1>
        <div className="mb-6">
          {/* Use the imported college photo */}
          <img
            src={collegePhoto}
            alt="Roorkee Institute of Technology"
            className="rounded-md shadow-md mx-auto max-h-52 w-max" // Added max-h-52 to control size
          />
        </div>
        <p className="text-2xl text-gray-700 font-semibold mb-2">
          3 UK CTR NCC, IIT Roorkee
        </p>
        <div className="mb-4">
          {/* Use the imported NCC logo */}
          <img
            src={nccLogo}
            alt="NCC Logo"
            className="h-30 w-28 mx-auto"
          />
        </div>
        <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
          Welcome to this portal designed for the RIT Students. Here, you can find all the information related to NCC.
        </p>
      </div>
    </div>
  );
};

export default Home;