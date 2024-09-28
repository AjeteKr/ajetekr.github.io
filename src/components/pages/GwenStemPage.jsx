
import React from "react";
import GwenStemImg from "../../img/gwenstem.png";
function GwenStemPage() {
    return (
        <div className="relative container mx-auto px-6 py-12">
            <div className="absolute inset-0"></div>
            <div className="bg-white bg-opacity-90 shadow-2xl rounded-lg p-10 mb-6 relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-[#2c3e50] text-center">Gwen STEM</h2>

                <div className="flex justify-center mb-6">
                    <img src={GwenStemImg} alt="GwenStem" className="w-1/2 h-auto object-cover rounded-lg shadow-lg" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-[#2c3e50] text-center">Project Description</h2>
                <p className="mb-6 text-lg text-[#34495e] text-center">GwenStem aims to provide a comprehensive platform for women and girls to access educational resources, connect with mentors, and participate in STEM-related activities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
                <Card title="Key Features" content={[
                    "User Profiles: Manage personal information and track progress.",
                    "Educational Resources: Access to courses, tutorials, and articles.",
                    "Community Support: Forums and networking opportunities.",
                    "Events: Stay updated with upcoming STEM-related events."
                ]} />
                <Card title="How to Use" content={[
                    "Register and create a profile to get started.",
                    "Explore educational resources and participate in discussions.",
                    "Sign up for events and track your progress."
                ]} />
                <Card title="Technologies Used" content={[
                    "ReactJS and PHP: For building the user interface.",
                    "Node.js: Backend server for handling requests.",
                    "MongoDB: Database for storing user data."
                ]} />
            </div>
            <div className="text-center relative z-10">
                <a href="https://github.com/AjeteKr/GwenStem" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300">View on GitHub</a>
            </div>
        </div>
    );
}
const Card = ({ title, content }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-2 text-[#2c3e50]">{title}</h3>
        <ul className="list-disc list-inside text-[#34495e]">
            {content.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);
export default GwenStemPage;
