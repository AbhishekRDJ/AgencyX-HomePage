import React from 'react';
import PortfolioCards from '../../components/CardSlider.jsx/CardSlider.jsx';
import Button from '../../components/Header/Header_btn.jsx';

const ProjectHeroSection = () => {
  return (
    <>
    <div className="relative flex justify-center items-center p-6 w-full min-h-screen" style={{ backgroundColor: '#0c1b44', borderRadius: '50px' ,width: '99%',marginLeft:"10px"}}>
     
      <div className="absolute inset-0" style={{ 
        background: 'linear-gradient(to bottom, #091636, #0c1b44)',
        borderRadius: '50px',
        
      }}></div>
      
      <div className="z-10 relative mx-auto w-full max-w-6xl" style={{ borderRadius: '50px' }}>
        
        <div className="mb-12">
          <button style={{ 
            border: '1px solid rgba(255, 255, 255, 0.2)', 
            color: 'white', 
            padding: '0.5rem 1.5rem', 
            borderRadius: '50px', 
            fontSize: '1.125rem', 
            fontWeight: '500',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}>
            Our Projects
          </button>
        </div>
        
        
        <div className="md:text-left text-center" style={{ textAlign: 'left' }}>
          <h1 style={{ 
            color: 'white', 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: '600', 
            lineHeight: '1.2',
            borderRadius: '50px'
          }}>
            Explore Our Latest <br />Creative Work
          </h1>
          <p className='mt-10 text-gray-500'>Discover how we've helped businesses transform their digital presence with innovative solutions and <br />cutting-edge technology.</p>
        </div>
        <PortfolioCards/>
        
    <Button text='View All Project'/>
      </div>
      
      
      
      <button className="absolute" style={{ 
        bottom: '1.5rem', 
        right: '1.5rem', 
        backgroundColor: 'white', 
        borderRadius: '50px', 
        padding: '0.75rem', 
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '1.5rem', width: '1.5rem' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
      
    </div>
    
    </>
  );
};


export default ProjectHeroSection;