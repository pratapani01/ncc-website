// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

// IMPORTANT: Make sure your logo paths in the 'assets' folder are correct.
import CollegeLogo from '../assets/college_logo.png'; 
import NccLogo from '../assets/ncc_logo.png';

const Header = () => {
  const linkStyle = "text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-200";
  const activeLinkStyle = "text-blue-700 font-bold border-b-2 border-blue-700 pb-1";

  return (
    // Added a subtle, semi-transparent Tiranga gradient to the background
    <header className="bg-gradient-to-r from-[#FF9933]/70 via-white/60 to-[#138808]/70 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-white/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Switched from Flexbox to CSS Grid for perfect centering */}
        <div className="grid grid-cols-3 items-center h-20">
          
          {/* Left Side: College Logo (First Column) */}
          <div className="flex-shrink-0 justify-self-start"> {/* Aligns item to the start of the column */}
            <img className="h-14 w-auto" src={CollegeLogo} alt="College Logo" />
          </div>

          {/* Center: Navigation Links (Second Column) */}
          <nav className="hidden md:flex md:space-x-10 justify-self-center"> {/* Aligns item to the center of the column */}
            <NavLink to="/" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Contact Us</NavLink>
          </nav>

          {/* Right Side: NCC Logo (Third Column) */}
          <div className="flex-shrink-0 justify-self-end"> {/* Aligns item to the end of the column */}
            <img className="h-16 w-auto" src={NccLogo} alt="NCC Logo" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
