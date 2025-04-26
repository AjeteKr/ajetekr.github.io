import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import myProfileImage from '../../assets/images/profile/removebg.png';
import './HomePage.css';

const HomePage = () => {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-600 via-purple-800 to-pink-700 text-white py-20 px-6 sm:px-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="floating-circle top-20 left-20"></div>
                <div className="floating-circle top-40 right-40"></div>
                <div className="floating-circle bottom-20 left-1/3"></div>
            </div>

            <div className="container relative mx-auto flex flex-col md:flex-row items-center z-10">
                <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0 fade-in-left">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
                        Welcome to My Portfolio
                    </h2>
                    <p className="text-lg md:text-xl mb-6 text-purple-800 leading-relaxed">
                        I am Ajete Krasniqi, a passionate software developer with experience in various technologies including React, .NET, and more.
                    </p>
                    <p className="text-xl mb-8 text-purple-800">Discover my work and projects</p>

                    <a href="#projects">
                        <button className="glass-button px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 mb-8">
                            Explore More
                        </button>
                    </a>

                    <div className="flex justify-center md:justify-start space-x-6 mt-4">
                        <a href="https://www.linkedin.com/in/ajete-krasniqi-68757626b/" 
                           className="social-icon-link">
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100016858862904&mibextid=ZbWKwL" 
                           className="social-icon-link">
                            <FaFacebook className="w-8 h-8" />
                        </a>
                        <a href="https://github.com/AjeteKr" 
                           className="social-icon-link">
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com/aajetee/?hl=en" 
                           className="social-icon-link">
                            <FaInstagram className="w-8 h-8" />
                        </a>
                    </div>
                </div>

                {/* Modern Profile Picture Design */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 fade-in-right">
                    <div className="profile-container">
                        <div className="profile-frame">
                            <div className="profile-glow"></div>
                            <img
                                src={myProfileImage}
                                alt="Profile"
                                className="profile-image"
                            />
                        </div>
                        <div className="profile-circles">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                        </div>
                    </div>
                </div>
            </div>

{/* Modern and Mobile-Optimized Statistics Section */}
<div className="relative z-10 py-12">
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
    <div className="stat-card hover:shadow-xl transition-transform duration-500 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-transparent to-transparent animate-pulse"></div>
      <div className="stat-content">
        <h2 className="stat-number text-4xl sm:text-5xl font-extrabold text-gradient">2</h2>
        <p className="stat-label mt-2 text-base sm:text-lg tracking-wide uppercase">Years of Experience</p>
      </div>
    </div>

    <div className="stat-card hover:shadow-xl transition-transform duration-500 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 via-transparent to-transparent animate-pulse"></div>
      <div className="stat-content">
        <h2 className="stat-number text-4xl sm:text-5xl font-extrabold text-gradient">14</h2>
        <p className="stat-label mt-2 text-base sm:text-lg tracking-wide uppercase">Projects Completed</p>
      </div>
    </div>

    <div className="stat-card hover:shadow-xl transition-transform duration-500 hover:scale-105 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/20 relative overflow-hidden text-center">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-400 via-transparent to-transparent animate-pulse"></div>
      <div className="stat-content">
        <h2 className="stat-number text-4xl sm:text-5xl font-extrabold text-gradient">30+</h2>
        <p className="stat-label mt-2 text-base sm:text-lg tracking-wide uppercase">Skills</p>
      </div>
    </div>
  </div>
</div>
        </section>
    );
};

export default HomePage;
