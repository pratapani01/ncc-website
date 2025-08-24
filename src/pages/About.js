// src/pages/About.js
import React, { useState, useRef, useEffect } from 'react';

// --- Asset Imports ---
// IMPORTANT: Make sure these files exist in your 'src/assets/' folder
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.JPG';
import img13 from '../assets/img13.jpg';
import img14 from '../assets/img14.jpeg';
import img15 from '../assets/img15.jpg';
import img16 from '../assets/img16.avif';
import nccFlag from '../assets/ncc_logo.png';
import nccRanks from '../assets/ncc_ranks.png';

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

// --- Main About Component ---
const About = () => {
  const [activeTab, setActiveTab] = useState('motto');
  const [selectedImage, setSelectedImage] = useState(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const tabsContainerRef = useRef(null);

  // Check if tabs are scrollable to show indicator
  useEffect(() => {
    const checkScroll = () => {
      const el = tabsContainerRef.current;
      if (el) {
        const isScrollable = el.scrollWidth > el.clientWidth;
        setShowScrollIndicator(isScrollable);
      }
    };
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const tabs = [
    { id: 'motto', label: 'Motto & Aims' },
    { id: 'history', label: 'History' },
    { id: 'wings', label: 'NCC Wings' },
    { id: 'flag', label: 'About the Flag' },
    { id: 'training', label: 'Training' },
    { id: 'ranks', label: 'Ranks & Certificates' },
    { id: 'benefits', label: 'Benefits' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'join', label: 'How to Join' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'history':
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">History of NCC</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        The National Cadet Corps (NCC) is the youth wing of the Indian Armed Forces. 
        It was formally established on <strong>15 July 1948</strong> through the National Cadet Corps Act, 1948. 
        However, its roots go back to <strong>1917</strong> when the University Corps was created during World War I, 
        later evolving into the University Officers Training Corps (UOTC).
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        After independence, the NCC was set up to provide military training to students and to instill 
        discipline, leadership, and a spirit of service. In <strong>1949</strong>, the Air Wing was added, 
        followed by the Naval Wing in <strong>1952</strong>, and the Girls Division was established to 
        give equal opportunities to young women.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        NCC played a vital role during national emergencies, including the <strong>1962 Indo-China War</strong>, 
        and the <strong>1965 & 1971 Indo-Pak Wars</strong>, by assisting civil authorities, hospitals, 
        and supply services. Over the years, it has expanded to schools and colleges across India, 
        becoming the world’s <strong>largest uniformed youth organization</strong>.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Today, the NCC trains over <strong>1.5 million cadets</strong> annually, focusing on discipline, 
        leadership, adventure, and social service. It continues to motivate youth to serve the nation and 
        inspires many to join the Armed Forces. Its motto, <strong>“Unity and Discipline”</strong>, 
        adopted in 1957, reflects its guiding principles.
      </p>
    </div>
  );

      case 'wings':
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Three Wings of NCC</h3>
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Army Wing */}
        <div className="border-l-4 border-red-600 pl-4">
          <h4 className="text-xl font-bold text-red-600">Army Wing</h4>
          <p className="text-gray-700 mt-2">
            The Army Wing is the largest wing of NCC and focuses on instilling discipline, 
            leadership, and patriotism. Cadets undergo basic military training similar to that 
            of the Army, which includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Drill and parade training</li>
            <li>Weapon training and shooting practice</li>
            <li>Map reading and field craft</li>
            <li>First aid and disaster management</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Cadets also participate in adventure activities like 
            <strong> mountain climbing, trekking, mountaineering, 
            and survival camps,</strong> preparing them for leadership roles and motivating them to 
            join the Armed Forces.
          </p>
        </div>

        {/* Naval Wing */}
        <div className="border-l-4 border-blue-800 pl-4">
          <h4 className="text-xl font-bold text-blue-800">Naval Wing</h4>
          <p className="text-gray-700 mt-2">
            The Naval Wing trains cadets in the basics of seamanship and naval operations, 
            creating awareness about India’s maritime strength. Training includes:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Navigation and communication</li>
            <li>Boat pulling and sailing</li>
            <li>Naval customs and traditions</li>
            <li>Ship modeling and signaling</li>
          </ul>
          <p className="text-gray-700 mt-2">
            Cadets also get opportunities to go on <strong>sea voyages, attachment camps, and naval ship visits</strong>, 
            where they learn teamwork, discipline, and life at sea.
          </p>
        </div>

        {/* Air Wing */}
        <div className="border-l-4 border-sky-500 pl-4">
          <h4 className="text-xl font-bold text-sky-500">Air Wing</h4>
          <p className="text-gray-700 mt-2">
            The Air Wing is designed to provide cadets with knowledge of aviation and the 
            functioning of the Indian Air Force. Cadets are trained in:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
            <li>Principles of flight and airmanship</li>
            <li>Aircraft recognition and aero-modeling</li>
            <li>Air navigation and meteorology</li>
            <li>Air Traffic Control basics</li>
          </ul>
          <p className="text-gray-700 mt-2">
            A highlight of this wing is the <strong>flying experience on microlight aircraft</strong>, 
            which inspires cadets to pursue careers in aviation and the Indian Air Force.
          </p>
        </div>
      </div>
    </div>
  );

      case 'flag':
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Text Section */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">The NCC Flag</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          The NCC flag is the proud symbol of the National Cadet Corps. 
          It reflects the unity of the three armed forces and the guiding principles of the NCC. 
          Every element in the flag carries deep significance:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong className="text-red-600">Red Stripe:</strong> Represents the <strong>Indian Army</strong>, 
            symbolizing courage, sacrifice, and the spirit of service to the nation.
          </li>
          <li>
            <strong className="text-blue-800">Dark Blue Stripe:</strong> Represents the <strong>Indian Navy</strong>, 
            symbolizing the vastness of the oceans, steadfastness, and discipline.
          </li>
          <li>
            <strong className="text-sky-500">Light Blue Stripe:</strong> Represents the <strong>Indian Air Force</strong>, 
            symbolizing the limitless sky, aspirations, and vigilance.
          </li>
          <li>
            <strong>Lotus Wreath:</strong> The <strong>17 lotuses</strong> in the wreath signify the 
            <strong>17 NCC State Directorates</strong>, representing unity in diversity and the spread of NCC across India.
          </li>
          <li>
            <strong>Crest & Motto:</strong> The letters <strong>“NCC”</strong> are inscribed in bold within the crest, 
            along with the motto <strong>“Unity and Discipline”</strong>, adopted in 1957. 
            It reflects the guiding philosophy of the NCC in shaping disciplined and patriotic citizens.
          </li>
        </ul>
        <p className="text-gray-700 mt-4 leading-relaxed">
          Together, these elements make the NCC flag not just a symbol of the organization, 
          but also of the spirit of Indian youth working towards nation-building with courage, discipline, and unity.
        </p>
      </div>

      {/* Flag Image */}
      <div className="flex justify-center">
        <img 
          src={nccFlag} 
          alt="NCC Flag" 
          className="rounded-lg shadow-md max-h-80 border border-gray-300" 
        />
      </div>
    </div>
  );

      case 'training':
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Training & Activities</h3>
            <p className="text-gray-700 mb-4">Training in NCC is comprehensive and is broadly divided into the following categories:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><b>Institutional Training:</b> This is the foundation, conducted weekly at the college. It includes foot drill, arms drill, weapon training (usually with .22 rifles), map reading, and theory classes on military subjects.</li>
              <li><b>Camp Training:</b> Camps are the highlight of NCC life. They provide practical experience and foster camaraderie. Key camps include the Annual Training Camp (ATC), Thal Sainik Camp (TSC), Vayu Sainik Camp (VSC), Nau Sainik Camp (NSC), and the prestigious Republic Day Camp (RDC) in Delhi.</li>
              <li><b>Adventure Training:</b> To inculcate a spirit of adventure, cadets are offered activities like trekking, mountaineering expeditions, rock climbing, parasailing, and water sports.</li>
              <li><b>Social Service & Community Development:</b> Cadets actively participate in social initiatives such as tree plantation drives, blood donation camps, anti-drug rallies, and disaster relief efforts.</li>
            </ul>
          </div>
        );
      case 'ranks':
        return (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Ranks & Certificates</h3>
              <h4 className="text-xl font-semibold text-gray-700 mt-4">Cadet Ranks</h4>
              <p className="text-gray-700">Ranks are awarded based on merit and seniority. The structure (for Army Wing) is: Cadet, Lance Corporal, Corporal, Sergeant, Company Quarter Master Sergeant (CQMS), Company Sergeant Major (CSM), Under Officer (UO), and Senior Under Officer (SUO).</p>
              <h4 className="text-xl font-semibold text-gray-700 mt-6">Certificates</h4>
              <p className="text-gray-700 leading-relaxed">'B' and 'C' certificates are awarded after successfully completing training and passing examinations. The 'C' Certificate is the highest recognition a cadet can achieve and holds immense value.</p>
            </div>
            <div className="flex justify-center">
              <img src={nccRanks} alt="NCC Ranks" className="rounded-lg shadow-md w-full" />
            </div>
          </div>
        );
      case 'benefits':
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Joining NCC</h3>
            <p className="text-gray-700 mb-4">Joining NCC offers numerous tangible and intangible benefits that shape a student's character and career.</p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><b>Defence Services Preference:</b> 'C' Certificate holders get a significant advantage in officer selection for the Army, Navy, and Air Force. This includes reserved vacancies in the IMA and OTA, and exemption from the written exam (like CDS) for certain entries.</li>
              <li><b>Government and Private Sector Jobs:</b> Many central and state government departments, as well as private companies, give preference to NCC certificate holders for recruitment.</li>
              <li><b>Academic Advantages:</b> Several universities offer bonus marks in admissions to students with NCC certificates.</li>
              <li><b>Personality Development:</b> The training instills discipline, leadership qualities, teamwork, and self-confidence, which are invaluable in any profession.</li>
              <li><b>Health and Fitness:</b> The physical activities and outdoor camps ensure a high level of physical fitness and mental resilience.</li>
              <li><b>Unique Experiences:</b> Cadets get opportunities for adventure activities, firing, and experiencing military life, which are not available to the general student population.</li>
            </ul>
          </div>
        );
      case 'gallery':
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Photo Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`NCC Activity ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        );
      case 'join':
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4">How to Join NCC</h3>
      <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
        <h4 className="text-xl font-semibold text-gray-700">Eligibility Criteria</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
          <li>Must be a citizen of India.</li>
          <li>Must be enrolled in a school or college that offers NCC.</li>
          <li>Must meet the prescribed age and medical fitness standards.</li>
        </ul>

        <h4 className="text-xl font-semibold text-gray-700 mt-6">Enrollment Process</h4>
        <p className="text-gray-700 mt-2">
          Students interested in joining NCC can either drop a message through the{" "}
          <strong>Contact Us</strong> section of this website or directly visit the{" "}
          <strong>NCC RIT Office</strong>. After providing their basic details (name, branch, etc.), 
          they will be invited for a short interaction, a simple fitness check, and a basic physical test. 
          Selected cadets then get the opportunity to wear the NCC uniform and proudly serve the nation 
          while developing discipline, leadership, and team spirit.
        </p>
      </div>
    </div>
  );

      case 'motto':
default:
  return (
    <div className="text-center">
      <div className="flex justify-center items-center mb-8">
        <div className="relative w-72 h-36 flex items-center justify-center">
          {/* Gradient Arc with Flat Top + Side Curves */}
          <svg
            viewBox="0 0 300 150"
            className="absolute top-0 left-0 w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="nccGradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                <stop stopColor="#e53935" />        {/* Red */}
                <stop offset="0.5" stopColor="#1e3a8a" /> {/* Navy Blue */}
                <stop offset="1" stopColor="#38bdf8" />   {/* Sky Blue */}
              </linearGradient>
            </defs>

            {/* Flat top + side arcs */}
            <path
              d="M20 70 
                 Q20 20, 60 20 
                 L240 20 
                 Q280 20, 280 70"
              stroke="url(#nccGradient)"
              strokeWidth="6"
              fill="none"
            />
          </svg>

          {/* Motto Text */}
          <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-blue-800 to-sky-500">
            Unity and Discipline
          </h3>
        </div>
      </div>

      {/* Hindi Motto */}
      <p className="text-2xl font-semibold text-gray-600 mb-8">(एकता और अनुशासन)</p>

      {/* Aims of NCC */}
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-4">Aims of NCC</h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed text-left max-w-3xl mx-auto">
        <li>
          To develop character, comradeship, discipline, leadership, secular outlook, 
          a spirit of adventure, and ideals of selfless service amongst the youth of the country.
        </li>
        <li>
          To create a human resource of organized, trained, and motivated youth, to provide leadership 
          in all walks of life and be always available for the service of the nation.
        </li>
        <li>
          To provide a suitable environment to motivate the youth to take up a career in the Armed Forces.
        </li>
      </ul>
    </div>
  );

    }
  };

  return (
    <>
      <div className="min-h-[80vh] w-full p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#FF9933] via-white to-[#138808]">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-black text-center text-gray-800 mb-6">About the National Cadet Corps</h2>
          
          {/* FIX: Tab Bar with correct overflow handling */}
          <div className="relative">
            <div ref={tabsContainerRef} className="border-b border-gray-300 mb-6 overflow-x-auto overflow-y-hidden">
              <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'border-blue-600 text-blue-700'
                        : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-400'
                    } whitespace-nowrap py-4 px-1 border-b-4 font-bold text-lg transition-colors`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            {showScrollIndicator && (
              <div className="absolute top-0 right-0 h-full flex items-center bg-gradient-to-l from-white/80 to-transparent pr-4 pointer-events-none md:hidden">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            )}
          </div>

          <div className="p-2 min-h-[400px]">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Fullscreen Image Viewer (Modal) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="NCC Gallery Fullscreen" 
            className="max-w-[90vw] max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default About;
