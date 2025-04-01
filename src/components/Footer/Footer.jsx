import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

const NavLinks = ({ links }) => (
  <div className="space-y-4">
    {links.map((link, index) => (
      <motion.a
        key={index}
        href={link.href}
        className="block text-gray-300 hover:text-white hover:underline hover:scale-105 transition-transform duration-300 ease-in-out transform"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
      >
        {link.label}
      </motion.a>
    ))}
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  const navLinks = [
    { label: 'Works', href: '#' },
    { label: 'Expertise', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Awards', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Partnerships', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Youtube', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-indigo-900 via-blue-950 to-purple-900 shadow-lg mx-6 mt-10 px-8 py-16 rounded-4xl overflow-hidden text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="gap-8 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-7xl"
      >
        {/* Left Section */}
        <div className="lg:text-left text-center">
          <h2 className="mb-4 font-semibold text-gray-300 text-2xl">Tell us about your project</h2>
          <h1 className="mb-6 font-extrabold text-yellow-400 text-7xl animate__animated animate__bounceInLeft">
            Let's Talk
          </h1>
        </div>

        {/* Right Section */}
        <div className="space-y-8">
          <h2 className="font-semibold text-gray-300 text-2xl">Get the latest inspiration & insights</h2>

          {/* Email Subscription Form */}
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="email"
              placeholder="Your Email..."
              value={email}
              onChange={handleEmailChange}
              className="flex-1 bg-white px-4 py-3 rounded-l-lg focus:outline-none text-black hover:scale-105 transition-transform transform"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 rounded-r-lg text-white hover:scale-110 transition-transform transform"
              aria-label="Subscribe"
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </motion.svg>
            </button>
          </form>

          <hr className="border-gray-700" />

          <div className="gap-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {navLinks.map((link) => (
              <NavLinks key={link.label} links={[link]} />
            ))}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-300 text-xl">Head Office</h3>
            <p className="mb-2">2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
            <p className="mb-2">support@example.com</p>
            <p>+ (406) 555-0120</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex justify-end mt-8"
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-gray-200 hover:bg-gray-300 p-4 rounded-full text-gray-800 hover:scale-110 transition-transform transform"
          aria-label="Scroll to top"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            whileHover={{ rotate: -90 }}
            transition={{ duration: 0.4 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </motion.svg>
        </button>
      </motion.div>

      <div className="mt-12 pt-6 border-gray-700 border-t">
        <div className="flex md:flex-row flex-col justify-between items-center mx-auto max-w-7xl">
          <div className="mb-4 md:mb-0">
            <p className="text-white text-sm">
              © 2025 <span className="font-medium text-blue-400">Diteck</span>. All Rights Reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <span className="mr-4 text-white text-sm">Follow Us</span>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;