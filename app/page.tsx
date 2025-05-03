 'use client';

import React, { useState, useEffect } from 'react';
import BirthdayAnimation from '../components/BirthdayAnimation';

export default function Home() {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      setIsFirstVisit(true);
      localStorage.setItem('hasVisited', 'true');
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-b from-pink-100 to-purple-100">
      {isFirstVisit && <BirthdayAnimation />}
      <div className="z-10 max-w-5xl w-full items-center justify-center text-center">
        <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
          🎉 Happy Birthday! 🎉
        </h1>
        <p className="text-2xl mb-8 text-gray-700">Wishing you a day filled with joy and celebration!</p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setIsFirstVisit(true)}
            className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
          >
            Show Animation Again
          </button>
        </div>
      </div>
    </main>
  );
}
