import React from 'react'; // Import the ServicesSection component

const HeroSectionAbout = () => {
  // Replace this URL with your actual image URL
  const imageUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
  
  return (
    <div className="bg-[#f2f1f6] px-4 md:px-8 py-16 w-full">
      <div className="mx-auto max-w-6xl">
        <div className="flex lg:flex-row flex-col items-start gap-8">
          {/* Left Content Section */}
          <div className="w-full lg:w-1/2">
            <button className="flex items-center space-x-2 bg-white shadow-sm mb-6 px-4 py-2 rounded-full">
              <div className="bg-blue-500 rounded-full w-2 h-2"></div>
              <span className="font-medium text-gray-800">Who we are</span>
            </button>
            
            <h1 className="mb-12 font-bold text-black text-5xl md:text-7xl">
  Award-Winning Digital
  <p 
    className="bg-clip-text bg-gradient-to-r from-[#2961eb] via-[#7242eb] via-[#9434ea] via-[#a637d8] via-[#ae3ad2] to-[#df45a4] text-transparent"
  >
    Agency Studio
  </p>
</h1>
            
            <p className="mb-12 font-light text-gray-700 text-lg md:text-xl">
              Since 2010, we've been partnering with forward-thinking brands to create digital experiences that transform businesses. Our team of experts combines strategic thinking with cutting-edge technology to deliver results that exceed expectations.
            </p>
            
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 mb-12">
              <div className="flex items-center space-x-3">
                <div className="text-green-500">✓</div>
                <div className="text-black">User-centered design</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500">✓</div>
                <div className="text-black">Full-stack development</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500">✓</div>
                <div className="text-black">Digital strategy</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500">✓</div>
                <div className="text-black">UI/UX expertise</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500">✓</div>
                <div className="text-black">Native applications</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-green-500">✓</div>
                <div className="text-black">Ongoing support</div>
              </div>
            </div>
            
            <div className="flex sm:flex-row flex-col gap-4">
              <a href="#" className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-medium text-white">
                Learn More About Us
              </a>
              <a href="#" className="bg-white px-8 py-4 border border-gray-200 rounded-full font-medium text-gray-800">
                Join Our Team
              </a>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="flex justify-center items-center mt-8 lg:mt-0 w-full lg:w-1/2">
            <div className="relative">
              <img 
                src={imageUrl} 
                
                alt="Digital Agency Team" 
                className="shadow-lg mt-80 rounded-2xl w-full h-full object-cover margintop"
              />
              {/* Overlay stats */}
              <div className="right-6 bottom-6 absolute flex space-x-6 bg-white shadow-md p-4 rounded-xl">
                <div className="text-center">
                  <p className="font-bold text-purple-600 text-2xl">150+</p>
                  <p className="text-gray-600 text-sm">Projects</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-purple-600 text-2xl">12+</p>
                  <p className="text-gray-600 text-sm">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAbout;