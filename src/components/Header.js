// src/components/Header.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// IMPORTANT: Make sure your logo paths in the 'assets' folder are correct.
import CollegeLogo from '../assets/college_logo.png'; 
import NccLogo from '../assets/ncc_logo.png';

// Naya, stylish Menu Icon
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h16" />
  </svg>
);

// Close (X) Icon
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = "text-gray-700 hover:text-blue-600 font-semibold text-lg transition duration-200";
  const activeLinkStyle = "text-blue-700 font-bold border-b-2 border-blue-700 pb-1";
  const mobileLinkStyle = "block text-lg text-center font-semibold text-gray-700 py-3 px-4 rounded-md hover:bg-white/50 transition-colors";

  return (
    <header className="bg-gradient-to-r from-[#FF9933]/70 via-white/60 to-[#138808]/70 backdrop-blur-lg shadow-md sticky top-0 z-50 border-b border-white/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex md:grid md:grid-cols-3 items-center h-20 justify-between">
          
          <div className="flex-shrink-0 md:justify-self-start">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <img className="h-14 w-auto" src={CollegeLogo} alt="College Logo" />
            </NavLink>
          </div>

          <nav className="hidden md:flex md:space-x-10 justify-self-center">
            <NavLink to="/" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Contact Us</NavLink>
          </nav>

          <div className="flex-shrink-0 justify-self-end flex items-center">
            <img className="hidden md:block h-16 w-auto" src={NccLogo} alt="NCC Logo" />
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex items-center space-x-2 p-2 rounded-md text-gray-800 hover:bg-white/50 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon /> : (
                <>
                  <span className="font-bold text-sm">MENU</span>
                  <MenuIcon />
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden pb-4 px-2">
          <nav className="flex flex-col space-y-2">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={mobileLinkStyle}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={mobileLinkStyle}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={mobileLinkStyle}>Contact Us</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
