import React from "react";// Import the AboutHeroSection component

const HeroSection = () => {
  return (
    // <div
    //     className="absolute inset-0 bg-gradient-to-b from-[#bfdbe1] via-[#c8dfe0] to-[#f2f1f6]"
    //   />
    <div className="relative bg-gradient-to-r from-[#bfdbe1] via-[#c8dfe0] to-[#dfdee9] px-8 py-16 min-h-screen" 
    style={{
      background:
        "linear-gradient(90deg, #bfdbe1 0%, #c8e2df 15%, #d2e3e2 30%, #e0e3e8 45%, #e9d9d9 60%, #f0c5be 75%, #f4e6e2 90%, #f7d0ea 100%)",
    }}>
      {/* Hero Content */}
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-center items-start">
          {/* Main Heading */}
          <h1 className="mb-4 font-bold text-gray-900 text-6xl tracking-tight">
            Award-Winning App <br />
            Development
          </h1>
          
          {/* Subheading */}
          <p className="mb-10 text-gray-700 text-xl">
            Transform your ideas into beautifully crafted mobile applications
          </p>
          
          {/* CTA Buttons */}
          <div className="flex items-center space-x-6 mb-16">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 px-8 py-3 rounded-full font-medium text-white transition hover:cursor-pointer">
              Explore Our Apps
            </button>
            <button className="px-6 py-3 font-medium text-gray-800 hover:text-gray-900 transition">
              Learn More
            </button>
          </div>
          
          {/* Client Stats */}
          <div className="flex items-center space-x-3">
            {/* Small client avatars */}
            <div className="flex -space-x-2">
              <div className="bg-gray-200 border-2 border-white rounded-full w-10 h-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8fHwxNzQzNDAwNTUxfDA&ixlib=rb-4.0.3?w=1024&h=1024" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gray-200 border-2 border-white rounded-full w-10 h-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8fHwxNzQzNDAwNTUxfDA&ixlib=rb-4.0.3?w=1024&h=1024" alt="Client" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gray-200 border-2 border-white rounded-full w-10 h-10 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MHx8fHwxNzQzNDAwNTUxfDA&ixlib=rb-4.0.3?w=1024&h=1024" alt="Client" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Stats text */}
            <p className="font-medium text-gray-600">
              1.7M+ Satisfied clients
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="top-40 right-48 absolute pointer-events-none">
        <div className="bg-gradient-to-b from-purple-400 to-purple-300 opacity-70 rounded-md w-20 h-64 rotate-12 transform" />
      </div>
      
      {/* Navigation arrows */}
      <div className="right-16 bottom-16 absolute flex items-center space-x-4">
        <button className="flex justify-center items-center bg-white shadow-md rounded-full w-10 h-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="flex justify-center items-center bg-white shadow-md rounded-full w-10 h-10">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Footer branding */}
      <div className="right-4 bottom-4 absolute">
        <div className="flex items-center space-x-1 bg-white shadow-sm px-3 py-1 rounded-full">
          <span className="text-gray-500 text-xs">made with</span>
          <span className="font-bold text-xs">
            <span className="text-gray-800">they</span>
            <span className="text-yellow-500">Boss</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;