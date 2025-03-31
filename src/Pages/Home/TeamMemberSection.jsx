import React from "react";
import { motion } from "framer-motion";
import TeamMembersGrid from "./TeamMemberLIST"; // Import the TeamMembersGrid component

const LeadershipSection = () => {
  return (
    <>
    <div className="bg-[#f2f1f6] px-6 py-24">
      <div className="flex md:flex-row flex-col justify-between items-center mx-auto max-w-7xl">
        {/* Badge Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-0"
        >
          <div className="inline-flex items-center bg-gray-100 shadow-sm mb-4 px-5 py-2 rounded-full">
            <span className="bg-blue-600 mr-2 rounded-full w-2.5 h-2.5"></span>
            <span className="font-medium text-gray-700">Our Expert Crew</span>
          </div>
        </motion.div>

        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:flex-1 md:mx-10 md:text-left text-center"
        >
          <h2 className="mb-1 font-extrabold text-black text-5xl md:text-6xl leading-tight">
            Meet the <br />
            <span className="bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 text-transparent">
              leadership team
            </span>
          </h2>
        </motion.div>

        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xs text-right"
        >
          <p className="text-gray-600 text-lg">
            We are all passionate and committed to delivering high-quality services to our clients.
          </p>
        </motion.div>
      </div>

      {/* Button Section */}
      </div>
    <TeamMembersGrid/>
      </>
  );
};

export default LeadershipSection;