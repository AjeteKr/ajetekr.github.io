
import React, { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import noProjectsImage from "../../img/no-projects.png";
import LakeXplorerImage from "../../img/lakexplorer.png";
import GwenStemImage from "../../img/gwenstem1.png";
import BlazorBankImage from "../../img/blazor-bank.png"; // Add your image path here
const Project = ({ title, description, date, image, githubLink, projectLink }) => {
    return (
        <div className="flex-shrink-0 w-80 relative group bg-gradient-to-r from-purple-800 via-pink-700 to-purple-800 rounded-lg overflow-hidden transform transition-transform hover:scale-105 shadow-lg hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative flex justify-center items-center w-full h-48 overflow-hidden">
                <img src={image} alt="Project" className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="relative p-4">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-300 mb-2 text-sm">{description}</p>
                <p className="text-gray-400 mb-2 text-xs">{date}</p>
                <div className="flex space-x-2">
                    <a href={githubLink} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 transition-colors">
                        <FaGithub className="mr-2" /> View Code
                    </a>
                    <a href={projectLink} className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-600 bg-white rounded-full hover:bg-purple-600 hover:text-white transition-colors">
                        <FaExternalLinkAlt className="mr-2" /> View Project
                    </a>
                </div>
            </div>
        </div>
    );
};
const ProjectsPage = () => {
    const scrollRef = useRef(null);
    const projects = [
        {
            title: "ToDoList Project",
            description: "To-Do List App in ReactJS simplifies daily task management. Users can add, delete, and mark tasks as completed.",
            date: "2023-11-01",
            image: noProjectsImage,
            githubLink: "https://github.com/AjeteKr/ToDoList",
            projectLink: "/projects/todolist",
        },
        {
            title: "Lake Xplorer",
            description: "Web app for discovering lakes. C#/ASP.NET, user sightings, JWT auth. Explore nature!",
            date: "2024-01-15",
            image: LakeXplorerImage,
            githubLink: "https://github.com/AjeteKr/LakeXplorer",
            projectLink: "/projects/lakexplorer",
        },
        {
            title: "Gwen STEM",
            description: "GwenStem aims to provide a comprehensive platform for women and girls to access educational resources, connect with mentors, and participate in STEM-related activities.",
            date: "2024-05-21",
            image: GwenStemImage,
            githubLink: "https://github.com/AjeteKr/StemGirls",
            projectLink: "/projects/gwenstem",
        },
        {
            title: "Blazor Bank Management System",
            description: "Blazor Bank Management System is a web application built with Blazor for secure and efficient management of bank accounts.",
            date: "2024-06-01",
            image: BlazorBankImage, // Add your image path here
            githubLink: "https://github.com/AjeteKr/BlazorBankManagementSystem", // Update with actual GitHub link
            projectLink: "/projects/bankmanagement", // Update with actual project link
        },
    ];
    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };
    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    return (
        <div id="projects" className="bg-gradient-to-r from-purple-900 to-black text-white py-20 px-20">
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-5xl font-bold mt-4 mb-12 text-center text-purple">My Projects</h1>
                <div className="flex items-center">
                    <button onClick={scrollLeft} className="mr-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">{"<"}</button>
                    <div ref={scrollRef} className="flex overflow-x-auto space-x-4 scrollbar-hide">
                        {projects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </div>
                    <button onClick={scrollRight} className="ml-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">{">"}</button>
                </div>
            </div>
        </div>
    );
};
export default ProjectsPage;
