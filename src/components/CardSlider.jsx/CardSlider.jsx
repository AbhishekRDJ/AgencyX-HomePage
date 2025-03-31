import React, { useState, useRef, useEffect } from 'react';

const PortfolioCards = () => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseDown = (e) => {
    setIsScrolling(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsScrolling(false);

  const handleMouseMove = (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const portfolioItems = [
    { category: 'Web Development', title: 'TechFusion Portal', description: 'A comprehensive tech portal for industry professionals', client: 'TechFusion Inc.', year: '2023', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { category: 'Healthcare', title: 'HealthLife Platform', description: 'Patient management system for modern healthcare providers', client: 'HealthLife Network', year: '2022', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { category: 'Environmental', title: 'EcoTrack Dashboard', description: 'Monitoring environmental metrics for sustainability', client: 'EcoTrack Global', year: '2023', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { category: 'Finance', title: 'FinEdge Banking', description: 'Next-generation digital banking experience', client: 'FinEdge Corp', year: '2022', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="group relative py-8 w-full overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex gap-6 pb-4 overflow-x-auto snap-x hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {portfolioItems.map((item, index) => (
          <div 
            key={index} 
            className="flex-none bg-white shadow-lg rounded-xl min-w-[350px] overflow-hidden hover:scale-105 transition-transform snap-start transform"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
          >
            <div className="relative h-48">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover lazyload" loading="lazy" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-black/40 to-black/70 p-6">
                <span className="mb-1 text-white/80 text-sm">{item.category}</span>
                <h3 className="font-bold text-white text-2xl">{item.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-4 text-gray-700">{item.description}</p>
              <div className="flex justify-between text-sm">
                <div>
                  <p className="text-gray-500">Client</p>
                  <p className="font-medium text-gray-900">{item.client}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500">Year</p>
                  <p className="font-medium text-gray-900">{item.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCards;
