import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import LakeXplorerImage from '../../assets/images/projects/lakexplorer.png';
import GwenStemImage from '../../assets/images/projects/gwenstem.png';
import BlazorBankImage from '../../assets/images/projects/bankmanagment.png';
import ToDoImage from '../../assets/images/projects/todoimage.png';
import TicTacToeImage from '../../assets/images/projects/tictactoeimage.png'
import NrrugeImage from '../../assets/images/projects/nrruge.png';
import inventoryImage from '../../assets/images/projects/inventoryManagment.png';
import projectImage from '../../assets/images/projects/projectManagment.png';
import quizAppImage from '../../assets/images/projects/quizApp.png';
import shopCardImage from '../../assets/images/projects/shopCard.png';
import timelineImage from '../../assets/images/projects/timelineUP.png';
import homeraImage from '../../assets/images/projects/homera.png';
import pabauImage from '../../assets/images/projects/pabau.png';

const projects = [ 
    {
      id: 1,
      title: "n'Rruge",
      description: "App for booking safe and easy trips in Kosovo",
      image: NrrugeImage,
      technologies: ["React", "JavaScript", "Next.js", ".NET", "SQL Server"],
      category: "Full Stack",
      liveLink: "https://www.nrruge.com/"
    },
    {
      id: 2,
      title: "HOMERA",
      description: "Centralized building management for improved communication and collaboration",
      image: homeraImage,
      technologies: [".NET", "Blazor", "MudBlazor", "SQL Server"],
      category: "Full Stack",
      liveLink: "https://www.homera.com/",
    },
    {
      id: 3,
      title: "Pabau",
      description: "Clinic management made easy with Pabau",
      image: pabauImage,
      technologies: ["Nodejs", "Express", "Prisma", "Nextjs", "Jira"],
      category: "Full Stack",
      liveLink: "https://pabau.com/t"
    },
    {
      id: 4,
      title: "Project Management",
      description: "Take Control of Your Projects with a Comprehensive Management Solution",
      image: projectImage,
      technologies: ["Nodejs", "Express", "Prisma", "Nextjs", "MUI", "AWS"],
      category: "Full Stack",
      githubLink: "/projects/project-managment",
      liveLink: "https://github.com/AjeteKr/project-managment"
    },
    {
      id: 5,
      title: "Inventory Management",
      description: "Transform Your Business with a Cutting-Edge Inventory Management Solution",
      image: inventoryImage,
      technologies: ["Nextjs", "Redux", "Postgres", "Nodejs", "AWS"],
      category: "Full Stack",
      githubLink: "/projects/inventory-managment",
      liveLink: "https://github.com/AjeteKr/inventory-managment"
    },
    {
        id: 6,
        title: "LakeXplorer",
        description: "A comprehensive platform for discovering and exploring lakes, featuring detailed information and user contributions.",
        image: LakeXplorerImage,
        technologies: ["React", "ASP.NET", "SQL Server"],
        category: "Full Stack",
        githubLink: "/projects/lakexplorer",
        liveLink: "https://github.com/AjeteKr/LakeXplorer"
    },
    {
        id: 7,
        title: "GwenStem",
        description: "Educational platform promoting STEM education for women and girls with mentorship opportunities.",
        image: GwenStemImage,
        technologies: ["React", "Node.js", "MongoDB"],
        category: "Education",
        githubLink: "/projects/gwenstem",
        liveLink: "https://github.com/AjeteKr/GwenStem"
    },
    {
        id: 8,
        title: "Bank Management",
        description: "Secure banking system with comprehensive account management and transaction features.",
        image: BlazorBankImage,
        technologies: ["Blazor", ".NET", "SQL Server", "Cloudinary"],
        category: "Finance",
        githubLink: "/projects/bankmanagement",
        liveLink: "https://github.com/AjeteKr/BlazorBankManagement"
    },
    {
        id: 9,
        title: "ToDoList Project",
        description: "A simple task management application.",
        image: ToDoImage,
        technologies: ["React", "JavaScript"],
        category: "Frontend",
        githubLink: "https://github.com/AjeteKr/ToDoList",
        liveLink: "https://github.com/AjeteKr/ToDoList"
    },
    {
        id: 10,
        title: "Tic Tac Toe Game",
        description: "A classic two-player game.",
        image: TicTacToeImage,
        technologies: ["React", "JavaScript"],
        category: "Frontend",
        githubLink: "https://github.com/AjeteKr/TicTacToe",
        liveLink: "https://github.com/AjeteKr/TicTacToe"
    },
    {
        id: 11,
        title: "Quiz App",
        description: "A custom-built quiz application designed to test knowledge and spark fun conversations.",
        image: quizAppImage,
        technologies: ["React", "JavaScript"],
        category: "Frontend",
        githubLink: "https://github.com/AjeteKr/quizApp",
        liveLink: "https://github.com/AjeteKr/quizApp"
    },
    {
        id: 12,
        title: "Shop Card",
        description: "Virtual shopping card for a seamless checkout experience.",
        image: shopCardImage,
        technologies: ["React", "JavaScript"],
        category: "Frontend",
        githubLink: "https://github.com/AjeteKr/shop-card",
        liveLink: "https://github.com/AjeteKr/shop-card"
    },
    {
        id: 13,
        title: "Timeline UP",
        description: "Timeline of Universiteti i Prishtines' milestones and achievements.",
        image: timelineImage,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "Education",
        githubLink: "https://github.com/AjeteKr/timelineUP.github.io",
        liveLink: "https://github.com/AjeteKr/timelineUP.github.io"
    },

    
]; 

const categories = ["All", "Full Stack", "Frontend", "Backend", "Education", "Finance"];
const ProjectsPage = () => { 
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-pink-800 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        My Projects Portfolio
                    </h1>
                    <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                        Explore my collection of projects showcasing various technologies and solutions
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Search projects..."
                            className="w-full px-4 py-3 bg-white bg-opacity-10 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-300" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                    ${selectedCategory === category 
                                        ? 'bg-purple-500 text-white' 
                                        : 'bg-white bg-opacity-10 text-purple-200 hover:bg-opacity-20'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (
                        <div key={project.id} className="project-card group">
                            <div className="relative overflow-hidden rounded-t-xl">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                                    <div className="flex gap-4">
                                        <Link to={project.githubLink} className="project-link">
                                            <FaGithub className="mr-2 text-white" />
                                            <p className="text-white">View Project</p>
                                        </Link>
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                                            <FaExternalLinkAlt className="mr-2 text-white" />
                                            <p className='text-white'>Live Demo</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-white bg-opacity-5 backdrop-blur-sm rounded-b-xl">
                                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-purple-200 text-sm mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 text-white bg-white/10 rounded-xl p-4 backdrop-blur-md border border-white/20">
                                {project.technologies.map(tech => (
                                        <span key={tech} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}; 

export default ProjectsPage;
