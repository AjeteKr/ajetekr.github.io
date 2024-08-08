import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import myProfileImage from '../../img/my_profile-removebg.png';
import './HomePage.css';

const HomePage = () => {
    return (
        <section id='home' className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h2>
                    <p className="text-lg mb-4">
                        I am Ajete Krasniqi, a passionate software developer with experience in various technologies including React, .NET, and more.
                    </p>
                    <p className="text-xl mb-8">Discover my work and projects</p>
                    
                    <a href="#projects">
                        <button className="bg-white text-purple-500 px-4 py-2 rounded shadow-lg hover:bg-purple-500 hover:text-white transition duration-300 mb-4">Explore More</button>
                    </a>
                    
                    <div className="flex justify-center md:justify-start space-x-4 mt-4">
                        <a href="https://www.linkedin.com/in/ajete-krasniqi-68757626b/" className="text-purple-800 hover:text-purple-300 transition duration-300">
                            <FaLinkedin className="w-8 h-8" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100016858862904&mibextid=ZbWKwL" className="text-purple-800 hover:text-purple-300 transition duration-300">
                            <FaFacebook className="w-8 h-8" />
                        </a>
                        <a href="https://github.com/AjeteKr" className="text-purple-800 hover:text-purple-300 transition duration-300">
                            <FaGithub className="w-8 h-8" />
                        </a>
                        <a href="https://www.instagram.com/aajetee/?hl=en" className="text-purple-800 hover:text-purple-300 transition duration-300">
                            <FaInstagram className="w-8 h-8" />
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
                    <div className="circle-bg"></div>
                    <img src={myProfileImage} alt="Profile" className="profile-image" />
                </div>
            </div>
            {/* Statistics Section */}
            <div className="py-3">
                <div className="container mx-auto flex justify-around">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">1+</h2>
                        <p className="text-lg">Years of Experience</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">5</h2>
                        <p className="text-lg">Projects Completed</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold">25+</h2>
                        <p className="text-lg">Skills</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
