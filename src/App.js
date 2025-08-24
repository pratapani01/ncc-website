// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
// Remove Wings and Join
// import Wings from './pages/Wings';
// import Join from './pages/Join';
import Contact from './pages/Contact'; // <-- Add this import

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Remove these routes */}
            {/* <Route path="/wings" element={<Wings />} /> */}
            {/* <Route path="/join" element={<Join />} /> */}
            <Route path="/contact" element={<Contact />} /> {/* <-- Add this route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;