import React, { useState, useEffect } from 'react';

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Your staff is very courteous and quick to respond to any service call we might have. Highly recommended.",
      author: "Jane Cooper",
      position: "Google Co-Founder"
    },
    {
      quote: "The team provides exceptional service with great attention to detail. We couldn't be happier.",
      author: "Alex Johnson",
      position: "Apple Director"
    },
    {
      quote: "Fast, reliable, and professional. They've helped us improve our operations significantly.",
      author: "Sarah Williams",
      position: "Amazon VP"
    }
  ];
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  return (
    <div className="relative shadow-lg mx-auto px-4 md:px-8 py-16 rounded-t-xl rounded-b-xl w-370 overflow-hidden">
      {/* Purple gradient decoration on right side */}
      <div className="top-0 right-0 absolute bg-gradient-to-l from-purple-300 to-transparent opacity-80 w-1/4 h-full" />
      
      <div className="relative mx-auto max-w-4xl">
        {/* Hear from customer button */}
        <div className="flex justify-center mb-12">
          <button className="flex items-center space-x-2 bg-white shadow-md px-4 py-2 rounded-full text-gray-800">
            <span className="bg-blue-500 rounded-full w-2 h-2"></span>
            <span className="font-medium text-sm">Hear from customer</span>
          </button>
        </div>
        
        {/* Testimonial quote */}
        <div className="text-center">
          <h2 className="mb-12 font-bold text-gray-900 text-4xl md:text-5xl lg:text-6xl">
            "{testimonials[activeIndex].quote}"
          </h2>
          
          {/* Author info */}
          <div className="flex justify-center items-center space-x-2 text-gray-700">
            <p className="font-semibold">{testimonials[activeIndex].author}</p>
            <span>•</span>
            <p className="text-gray-500">{testimonials[activeIndex].position}</p>
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-10">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Up arrow at bottom */}
        <div className="flex justify-end mt-8">
          
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;