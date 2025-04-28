import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaCreditCard, FaUserCircle } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { SiDotnet, SiGooglemaps, SiAzuredevops, SiReact, SiMicrosoftsqlserver, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiStripe } from 'react-icons/si';
import logonRruge from '../../assets/images/projects/logoL.png';
import nrrugeView from '../../assets/images/projects/nrruge.png';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const NRrugePage = () => {

  const features = [
    { icon: <FaMapMarkedAlt className="text-3xl" />, title: 'Quick Ride Booking', description: 'Request rides with one click and set destinations easily' },
    { icon: <BiCurrentLocation className="text-3xl" />, title: 'Live Tracking', description: 'Real-time location tracking for riders and drivers' },
    { icon: <FaCreditCard className="text-3xl" />, title: 'Secure Payments', description: 'Multiple payment options with secure processing' },
    { icon: <FaUserCircle className="text-3xl" />, title: 'Driver Profiles', description: 'Detailed driver information and ratings' }
  ];

  const techStack = [
    { icon: <TbBrandNextjs className="text-4xl" />, name: 'Next.js' },
    { icon: <SiReact className="text-4xl" />, name: 'React' },
    { icon: <SiDotnet className="text-4xl" />, name: '.NET Framework' },
    { icon: <SiTypescript className="text-4xl" />, name: 'TypeScript' },
    { icon: <SiRedux className="text-4xl" />, name: 'Redux' },
    { icon: <SiTailwindcss className="text-4xl" />, name: 'Tailwind CSS' },
    { icon: <SiAzuredevops className="text-4xl" />, name: 'Azure DevOps' },
    { icon: <SiMicrosoftsqlserver className="text-4xl" />, name: 'SQL Server' },
    { icon: <SiGooglemaps className="text-4xl" />, name: 'Google Maps' },
    { icon: <SiStripe className="text-4xl" />, name: 'Stripe' }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Hero Section */}
        <motion.section
          variants={fadeIn}
          className="relative py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              {/* Left Content */}
              <div className="text-center md:text-left md:w-1/2">
                <motion.img
                  src={logonRruge}
                  alt="n'Rrugë Logo"
                  className="mx-auto md:mx-0 mb-6 h-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.h1
                  className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Revolutionizing <br />
                  <span className="text-purple-500">Transportation</span> in Kosovo
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-purple-200 mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Experience smart, fast, and reliable ride-hailing services with n'Rrugë.
                </motion.p>
                <motion.div
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <a
                    href="https://www.nrruge.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 hover:bg-purple-500 text-white px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 font-semibold"
                  >
                    View Demo
                  </a>
                  <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full shadow-lg transition-all transform hover:scale-105 font-semibold">
                    Learn More
                  </button>
                </motion.div>
              </div>

              {/* Right Content */}
              <div className="relative md:w-1/2">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-purple-300/20 rounded-3xl transform rotate-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                ></motion.div>
                <motion.img
                  src={nrrugeView}
                  alt="n'Rrugë App Interface"
                  className="relative z-10 rounded-2xl shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-20 bg-white"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            {/* Add the view image */}
            <div className="mb-12">
              <img
                src={nrrugeView} // Replace with the actual path to the view image
                alt="n'Rrugë View"
                className="mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-purple-600 mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section
          className="py-20 bg-gray-50"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-purple-600 mb-2">{tech.icon}</div>
                  <span className="text-gray-800 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Project Status Section */}
        <motion.section
          className="py-20 bg-gradient-to-b from-purple-900 to-purple-800 text-white"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Ready to Transform Transportation?</h2>
              <p className="text-purple-900 text-lg mb-12">
                Join us in revolutionizing the way people travel across Kosovo.
                Currently in active development with new features being added regularly.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a 
                  href="https://www.nrruge.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-purple-900 px-8 py-3 rounded-full hover:bg-purple-100 transition-all transform hover:scale-105 font-semibold inline-block"
                >
                  Start Your Journey
                </a>
                <button className="border-2 border-white text-purple-600 px-8 py-3 rounded-full hover:bg-white/10 transition-all transform hover:scale-105 font-semibold">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default NRrugePage;