// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 via-blue-800 to-sky-500 text-white mt-auto">
      <div className="container mx-auto py-4 px-5 text-center">
        <p className="font-semibold">&copy; {new Date().getFullYear()} RIT Students NCC. All Rights Reserved by Animesh.</p>
        {/* <p className="text-sm text-gray-200 mt-1">Developed by Animesh</p> */}
        <p className="text-xs text-gray-300 mt-1">Ekta aur Anushasan | Unity and Discipline</p>
      </div>
    </footer>
  );
};

export default Footer;