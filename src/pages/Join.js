// src/pages/Join.js
import React from 'react';

const Join = () => {
  return (
    <div className="p-6 md:p-12 bg-gradient-to-bl from-yellow-100 to-red-200">
      <div className="max-w-4xl mx-auto bg-white/80 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-red-600">NCC Kaise Join Karein?</h2>
        <div className="space-y-4 text-gray-700">
          <p>NCC join karne ke liye aapko apne college ke NCC officer se contact karna hoga. Enrollment process aam taur par academic session ke shuruaat mein hota hai.</p>
          <h3 className="text-2xl font-semibold text-gray-800 pt-4">Eligibility Criteria</h3>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>Aapko Indian citizen hona chahiye.</li>
            <li>Aapko ek recognized school/college ka student hona chahiye.</li>
            <li>Aapko prescribed medical standards meet karne honge.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Join;