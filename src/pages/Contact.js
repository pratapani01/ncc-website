// src/pages/Contact.js
import React from 'react';

// Reusable component for a contact card
const ContactPersonCard = ({ title, name, phone, whatsappMessage }) => {
  // Phone must be digits only (with country code, no + or spaces)
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneLink = `tel:+${phone}`; // keep + here for tel link

  return (
    <div className="bg-white/90 p-6 rounded-lg shadow-lg text-left w-full max-w-sm">
      <h3 className="text-xl font-bold text-gray-800 border-b border-gray-300 pb-2 mb-4">{title}</h3>
      <p className="text-lg text-gray-700 font-semibold">{name}</p>
      <div className="mt-4 flex flex-col space-y-3">
        <a 
          href={phoneLink} 
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Call Now
        </a>
        <a 
          href={whatsappLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 transition-colors"
        >
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
};


const Contact = () => {
  // ✅ Correct format: Only country code + number (no +, no spaces)
  const anoPhone = "918918817935"; 
  const suoPhone = "919554117566"; 

  const defaultMessage = "Hello, I have a query regarding NCC at RIT.";

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-gradient-to-br from-[#FF9933] via-white to-[#138808]">
      <div className="w-full max-w-5xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 pb-2 border-gray-400">Contact Us</h2>
        
        <div className="flex flex-col md:flex-row justify-around items-start gap-8">
          
          <div className="w-full md:w-1/2 flex justify-center">
            <ContactPersonCard 
              title="Associate NCC Officer (ANO)"
              name="Retd. Sub Sita Singh Sir"
              phone={anoPhone}
              whatsappMessage={defaultMessage}
            />
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <ContactPersonCard 
              title="Senior Under Officer (SUO)"
              name="SUO Animesh Pratap Singh"
              phone={suoPhone}
              whatsappMessage={defaultMessage}
            />
          </div>

        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800">College Address</h3>
          <p className="text-gray-600 mt-2">Roorkee Institute of Technology,</p>
          <p className="text-gray-600">8th Km Dehradun Road, Puhana, Roorkee</p>
          <p className="text-gray-600">Uttarakhand, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
