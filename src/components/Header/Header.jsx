import React, { useState } from "react";
import './Header.css'; // Import the CSS file for styles
import Logo from "../logo/logo"; // Import the Logo component
import Button from "./Header_btn";

const Header = () => {
  const [activeNav, setActiveNav] = useState("home");
 
  const [showLanguages, setShowLanguages] = useState(false);

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <header className="flex justify-between items-center bg-transparent px-8 py-9 Header"
    style={{
      background:
        "linear-gradient(90deg, #bfdbe1 0%, #c8e2df 15%, #d2e3e2 30%, #e0e3e8 45%, #e9d9d9 60%, #f0c5be 75%, #f4e6e2 90%, #f7d0ea 100%)",
    }}>
      {/* Logo */}
      <div className="flex items-center">
        <Logo/>
      </div>

      <nav className="flex items-center space-x-4 bg-white bg-opacity-50 shadow-md backdrop-blur-md px-6 py-4 rounded- internal_header">
        <a 
          href="#demos" 
          className={activeNav === "home" ? "text-[#6366f1]" : "text-black hover:text-indigo-300"}
          onClick={() => handleNavClick("home")}
        >
          Home
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#company" 
          className={activeNav === "about" ? "text-indigo-500" : "text-black hover:text-indigo-300"}
          onClick={() => handleNavClick("about")}
        >
          About
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#services" 
          className={activeNav === "app" ? "text-indigo-500" : "text-black hover:text-indigo-300"}
          onClick={() => handleNavClick("app")}
        >
          App
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#casestudies" 
          className={activeNav === "projects" ? "text-indigo-500" : "text-black hover:text-indigo-300"}
          onClick={() => handleNavClick("projects")}
        >
          Projects
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#news" 
          className={activeNav === "blog" ? "text-indigo-500" : "text-black hover:text-indigo-300"}
          onClick={() => handleNavClick("blog")}
        >
          Blog
        </a>
        <span className="text-gray-300">•</span>
        <a 
          href="#allpages" 
          className={activeNav === "contact" ? "text-indigo-500" : "text-black hover:text-indigo-300"}
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </a>
      </nav>

      <div className="flex items-center space-x-2">
        
        <button 
          className="flex justify-center items-center bg-gray-100 hover:bg-gray-200 rounded-full focus:outline-none w-10 h-10 transition-all"
          aria-label="Toggle dark mode"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5287 15.9294C20.7886 15.6885 20.0111 15.5645 19.2286 15.5645C16.1054 15.5645 13.3822 17.4471 12.2991 20.2097C12.0676 20.8238 11.9169 21.4797 11.8514 22.1614C11.8077 22.6139 11.3451 22.9236 10.9088 22.7704C8.28895 21.7809 6.23404 19.7487 5.22179 17.1231C3.9090 13.7901 4.4596 9.93186 6.63665 7.10254C6.85687 6.82283 6.70856 6.41943 6.36489 6.3314C4.39119 5.87318 2.66895 4.72549 1.46146 3.13757C1.20404 2.78528 1.37498 2.28997 1.79979 2.15288C2.30547 1.99661 2.83007 1.88004 3.36489 1.80855C8.13723 1.10238 12.6149 4.16176 13.6272 8.8935C13.6505 9.0124 13.8311 9.04597 13.8967 8.94358C15.809 6.00868 14.8383 2.3328 12.1082 0.449931C11.7646 0.207519 11.8937 -0.26014 12.327 -0.235424C12.5256 -0.223996 12.7242 -0.206854 12.9228 -0.183997C17.2129 0.364829 20.5147 4.02591 20.5409 8.39503C20.542 8.52189 20.6805 8.58118 20.7723 8.48651C22.8115 6.32464 23.2693 3.15654 22.0956 0.375313C21.9522 0.00285267 22.3376 -0.334375 22.6739 -0.120677C27.0126 2.79432 27.3361 9.36842 23.4001 12.6946C21.0114 14.7082 21.5233 14.52 21.9564 14.8243C22.1847 14.974 22.1324 15.3358 21.8707 15.4162C21.7498 15.4555 21.6385 15.4911 21.5287 15.9294Z" fill="currentColor"/>
          </svg>
        </button>

        {/* Language Selection Dropdown */}
        <div className="relative">
          <button 
            className="flex justify-center items-center space-x-1 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-full focus:outline-none transition-all"
            onClick={toggleLanguageDropdown}
            aria-label="Select language"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM13.9 7H12C11.9 5.5 11.6 4.1 11.2 3C12.6 3.8 13.6 5.3 13.9 7ZM8 14C7.4 14 6.2 12.1 6 9H10C9.8 12.1 8.6 14 8 14ZM6 7C6.2 3.9 7.3 2 8 2C8.7 2 9.8 3.9 10 7H6ZM4.9 3C4.4 4.1 4.1 5.5 4 7H2.1C2.4 5.3 3.4 3.8 4.9 3ZM2.1 9H4C4.1 10.5 4.4 11.9 4.8 13C3.4 12.2 2.4 10.7 2.1 9ZM11.1 13C11.6 11.9 11.8 10.5 11.9 9H13.8C13.6 10.7 12.6 12.2 11.1 13Z" fill="currentColor"/>
            </svg>
            <span>English</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none" className="ml-1">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {showLanguages && (
            <div className="right-0 z-10 absolute bg-white shadow-lg mt-2 py-1 rounded-md w-40">
              <a href="#" className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm">English</a>
              <a href="#" className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm">Spanish</a>
              <a href="#" className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm">French</a>
              <a href="#" className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm">German</a>
            </div>
          )}
        </div>

        {/* Original Button */}
        <Button />
      </div>
    </header>
  );
};

export default Header;