import React, { useState } from 'react';
import { Star, ArrowRight, Smartphone, Folder } from 'lucide-react';
import Button from '../../components/Header/Header_btn';

const MobileAppsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Design', 'Productivity', 'Health', 'Wellness', 'Finance', 'Marketing'];
  
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const apps = [
    {
      id: 1,
      name: 'DesignPro',
      description: 'Professional design tool for mobile and web interfaces',
      rating: 4.8,
      downloads: '50K+',
      category: 'Design',
      bgGradient: 'from-purple-500 to-blue-500',
      icon: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
    },
    {
      id: 2,
      name: 'TaskMaster',
      description: 'Streamline your workflow with advanced task management',
      rating: 4.7,
      downloads: '100K+',
      category: 'Productivity',
      bgGradient: 'from-green-500 to-teal-500',
      icon: 'https://images.unsplash.com/photo-1632435499182-e436787ce107?ixid=M3w2MjE1MDB8MHwxfHNlYXJjaHwxfHxwcm9kdWN0aXZpdHklMjBhcHAlMjBpY29ufGVufDB8fHx8MTc0MzI2MjUxNnww&ixlib=rb-4.0.3?w=1024&h=1024',
    },
    {
      id: 3,
      name: 'HealthTrack',
      description: 'Monitor your health and fitness with personalized insights',
      rating: 4.9,
      downloads: '75K+',
      category: 'Health',
      bgGradient: 'from-red-500 to-orange-500',
      icon: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
    },
    {
      id: 4,
      name: 'MindSpace',
      description: 'Meditation and mindfulness for better mental wellness',
      rating: 4.6,
      downloads: '45K+',
      category: 'Wellness',
      bgGradient: 'from-blue-400 to-blue-600',
      icon: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
    },
    {
      id: 5,
      name: 'FinTrack',
      description: 'Personal finance management and budget tracking',
      rating: 4.5,
      downloads: '80K+',
      category: 'Finance',
      bgGradient: 'from-teal-400 to-cyan-500',
      icon: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
    },
    {
      id: 6,
      name: 'SocialPulse',
      description: 'Social media management and analytics platform',
      rating: 4.7,
      downloads: '65K+',
      category: 'Marketing',
      bgGradient: 'from-pink-500 to-purple-500',
      icon: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&h=64&q=80',
    }
  ];

  const filteredApps = activeCategory === 'All' 
    ? apps 
    : apps.filter(app => app.category === activeCategory);
  
  return (
    <section className="mx-auto px-4 py-16 w-380 text-center">
  <div className="mb-12">
    <p className="mb-2 text-blue-500">Our Applications</p>
    <h3 className="mb-12 font-bold text-xl md:text-5xl">
      Discover Our Award-Winning <span className="text-indigo-500">Mobile</span> 
      <span className="text-purple-500"><br />Apps</span>
    </h3>
    <p className="mx-auto max-w-3xl text-bold text-gray-600">
      From productivity tools to wellness companions, our apps are designed with user experience at the forefront. Each application is crafted with care and attention to detail.
    </p>
  </div>

  <div className="flex flex-wrap justify-center gap-2 mb-15">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => handleCategoryClick(category)}
        className={`px-6 py-2 rounded-full ${
          activeCategory === category
            ? 'bg-purple-600 text-white bg-gradient-to-r from-[#2961eb] via-[#7242eb] via-[#9434ea] via-[#a637d8] via-[#ae3ad2] to-[#df45a4] text-transparent font-bold'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        }`}
      >
        {category}
      </button>
    ))}
  </div>

  <div className="flex flex-wrap justify-center gap-6 mx-auto w-full max-w-screen-2xl">
  {filteredApps.map((app) => (
    <div
      key={app.id}
      className="flex flex-col bg-white shadow-md rounded-xl w-full sm:min-w-[300px] overflow-hidden md:basis-[calc(33.333%-1.5rem)] lg:basis-[calc(33.333%-1.5rem)]"
    >
      <div className={`h-20 w-full bg-gradient-to-r ${app.bgGradient}`}></div>

      {/* Card content */}
      <div className="relative flex flex-col flex-grow p-6">
        <div className="-top-8 left-6 absolute shadow-sm border-4 border-white rounded-xl overflow-hidden">
          <img src={app.icon} alt={`${app.name} icon`} className="w-16 h-16 object-cover" />
        </div>

        <div className="flex flex-col flex-grow mt-8 text-left">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-xl">{app.name}</h3>
            <span className="bg-gray-100 px-2 py-1 rounded-md text-xs">{app.category}</span>
          </div>
          <p className="flex-grow mt-2 text-gray-600 text-sm">{app.description}</p>

          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center gap-1">
              <Star className="fill-yellow-400 w-4 h-4 text-yellow-400" />
              <span className="font-medium text-sm">{app.rating}</span>
              <span className="mx-1 text-gray-400">|</span>
              <span className="text-gray-500 text-sm">{app.downloads}</span>
            </div>
            <a href="#" className="flex items-center text-blue-500 text-sm">
              Details <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="flex justify-between gap-4 mt-4">
            <button className="flex justify-center items-center gap-0 bg-gray-900 px-15 py-2 rounded-md text-white">
              <Smartphone className="w-10 h-4" />
              <span>iOS</span>
            </button>
            <button className="flex justify-center items-center gap-2 bg-gray-900 px-10 py-2 rounded-md text-white">
              <Folder className="w-10 h-4" />
              <span>FolderInput</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
<div className='mt-10 ml-175' >
  <Button text='View All Project'/>
</div>
</section>

  
  );
};

export default MobileAppsSection;