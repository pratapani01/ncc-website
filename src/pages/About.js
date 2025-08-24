// src/pages/About.js
import React from 'react';

const About = () => {
  return (
    <div className="p-6 md:p-12 bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="max-w-4xl mx-auto bg-white/80 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 pb-2 border-blue-600">NCC ke Baare Mein</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            National Cadet Corps (NCC) Indian Armed Forces ka youth wing hai. Iska headquarters New Delhi, India mein hai. Yeh ek Tri-Services Organization hai, jisme Army, Navy aur Air Wing shaamil hain, jo desh ke youth ko disciplined aur patriotic citizens banane ke liye kaam karti hai.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 pt-4">Motto of NCC</h3>
          <p>NCC ka motto "Unity and Discipline" (एकता और अनुशासन) hai. Isse 12th Central Advisory Committee (CAC) meeting jo 12 Oct 1980 ko hui thi, usmein adopt kiya gaya tha.</p>
        </div>
      </div>
    </div>
  );
};

export default About;