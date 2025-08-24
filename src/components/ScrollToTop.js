// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Yeh component har baar page badalne par scroll ko top par le aayega
const ScrollToTop = () => {
  // 'pathname' ko track karega (e.g., '/', '/about', '/contact')
  const { pathname } = useLocation();

  // 'useEffect' tab chalta hai jab 'pathname' badalta hai
  useEffect(() => {
    // Screen ko top (0, 0) par scroll kar do
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array me pathname, to ensure it runs on route change

  return null; // Yeh component screen par kuch bhi nahi dikhata
};

export default ScrollToTop;
