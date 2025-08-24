// src/pages/Wings.js
import React from 'react';

const Wings = () => {
  return (
    <div className="p-6 md:p-12 bg-gradient-to-tr from-green-100 to-teal-200">
      <div className="max-w-4xl mx-auto bg-white/80 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-2 border-green-600">NCC Wings</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-green-50 rounded-lg shadow-sm hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-green-800 mb-3">Army Wing</h3>
            <p>Cadets ko basic military training di jaati hai jaise drill, map reading, weapon training, etc.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">Naval Wing</h3>
            <p>Cadets ko seamanship, navigation, aur naval warfare ke basics sikhaye jaate hain.</p>
          </div>
          <div className="p-6 bg-sky-50 rounded-lg shadow-sm hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold text-sky-800 mb-3">Air Wing</h3>
            <p>Cadets ko aviation, aerodynamics, aur air navigation ke baare mein train kiya jaata hai.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wings;