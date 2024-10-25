// GlassmorphicShowcase.js
import React from 'react';

const GlassmorphicShowcase = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      {/* Glass Panel */}
      <div className="relative bg-white bg-opacity-10 backdrop-blur-xl border border-white border-opacity-20 rounded-3xl shadow-2xl p-8 flex flex-col items-center space-y-6 w-96 h-96">
        
        {/* MacBook Image */}
        <div className="w-full h-2/3 bg-gradient-to-br from-white to-gray-200 bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg border border-white border-opacity-20 flex justify-center items-center">
          <img 
            src={`${process.env.PUBLIC_URL}/laptop.webp`}
            alt="MacBook" 
            className="object-contain w-full h-full rounded-lg"
          />
        </div>
        
        {/* Mobile Image */}
        <div className="w-2/4 h-16 bg-gradient-to-br from-white to-gray-300 bg-opacity-30 backdrop-blur-md rounded-xl shadow-md border border-white border-opacity-20 flex justify-center items-center">
          <img 
            src="https://via.placeholder.com/100x150?text=Phone" 
            alt="Phone" 
            className="object-contain w-full h-full rounded-xl"
          />
        </div>
        
        {/* Floating Glass Effect (Optional) */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-10 backdrop-blur-md rounded-full w-10 h-10 border border-white border-opacity-30 shadow-lg"></div>
      </div>
    </div>
  );
};

export default GlassmorphicShowcase;
