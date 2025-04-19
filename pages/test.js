// pages/index.js

import { useRef } from 'react';

export default function Home() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Scroll Button */}
      <div className="flex justify-center items-center h-screen bg-blue-100">
        <button
          onClick={scrollToAbout}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
        >
          Scroll to About
        </button>
      </div>

      {/* Target Section */}
      <section
        ref={aboutRef}
        className="h-screen flex items-center justify-center bg-white"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">About Section</h2>
          <p className="text-gray-600">You scrolled here 🎉</p>
        </div>
      </section>
    </div>
  );
}
