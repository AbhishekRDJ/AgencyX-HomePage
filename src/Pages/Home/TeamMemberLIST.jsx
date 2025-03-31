import React, { useState } from 'react';

const TeamMember = ({ name, title, imageSrc, accentColor = '#6370c4' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`relative bg-gray-200 rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform ${isHovered ? 'scale-105' : 'scale-100'}`} 
      style={{ width: isHovered ? '330px' : '300px', height: isHovered ? '400px' : '390px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0">
        <img 
          src={imageSrc} 
          alt={name} 
          className={`grayscale w-full h-full object-cover transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-500"
          style={{ background: `linear-gradient(to top, ${accentColor}, transparent)`, opacity: isHovered ? 0.6 : 0.3 }}
        ></div>
      </div>
      
      <div className="bottom-10 left-6 absolute text-white">
        <h2 className="font-bold text-3xl">{name}</h2>
        <p className="text-lg">{title}</p>
      </div>
      
      <button className="right-4 bottom-4 absolute flex justify-center items-center bg-white opacity-0 hover:opacity-100 rounded-full w-10 h-10 text-gray-800 transition-opacity">
        <span className="text-2xl">+</span>
      </button>
    </div>
  );
};

const TeamMembersGrid = () => {
  const teamMembers = [
    {
      name: "Marvin Jones",
      title: "Ceo - Founder",
      imageSrc: "https://demo2.wpopal.com/diteck/wp-content/uploads/2024/11/team-1.jpg",
      accentColor: "#6370c4"
    },
    {
      name: "Arlene Bell",
      title: "Chief Marketing",
      imageSrc: "https://demo2.wpopal.com/diteck/wp-content/uploads/2024/11/team-1.jpg",
      accentColor: "#6370c4"
    },
    {
      name: "Guy Hawkins",
      title: "Excutive Admin",
      imageSrc: "https://demo2.wpopal.com/diteck/wp-content/uploads/2024/11/team-1.jpg",
      accentColor: "#6370c4"
    },
    {
      name: "Cody Fisher",
      title: "Office Manager",
      imageSrc: "https://demo2.wpopal.com/diteck/wp-content/uploads/2024/11/team-1.jpg",
      accentColor: "#6370c4"
    }
  ];

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="flex flex-wrap justify-center gap-6 mt-25">
        {teamMembers.map((member, index) => (
          <TeamMember 
            key={index}
            name={member.name}
            title={member.title}
            imageSrc={member.imageSrc}
            accentColor={member.accentColor}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembersGrid;