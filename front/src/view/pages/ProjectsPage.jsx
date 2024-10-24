import React from "react"; 
import { Link } from "react-router-dom"; 
import { FaTimes } from "react-icons/fa"; 
import LakeXplorerImage from '../../assets/images/projects/lakexplorer.webp' 
import GwenStemImage from "../../assets/images/projects/gwenstem1.png"; 
import BlazorBankImage from "../../assets/images/projects/bankmanagment.png"; 
import ToDoImage from "../../assets/images/projects/todoimage.webp"; 
import TicTacToeImage from "../../assets/images/projects/TicTacToeImage.webp"

const projects = [ 
  { title: "ToDoList Project", date: "November 2023", image: ToDoImage, githubLink: "https://github.com/AjeteKr/ToDoList", projectLink: "/projects/todolist", }, 
  { title: "Lake Xplorer", date: "January 2024", image: LakeXplorerImage, githubLink: "https://github.com/AjeteKr/LakeXplorer", projectLink: "/projects/lakexplorer", }, 
  { title: "Gwen STEM", date: "May 2024", image: GwenStemImage, githubLink: "https://github.com/AjeteKr/StemGirls", projectLink: "/projects/gwenstem", }, 
  { title: "Bank Management", date: "June 2024", image: BlazorBankImage, githubLink: "https://github.com/AjeteKr/BlazorBankManagementSystem", projectLink: "/projects/bankmanagement", }, 
  { title: "Tic Tac Toe Game", date: "October 2024", image: TicTacToeImage, githubLink: "https://github.com/AjeteKr/TicTacToe", projectLink: "/projects/tictactoe", }, 
]; 

const Project = ({ title, date, image, githubLink, projectLink, reversed }) => { 
  return ( 
    <div className={`relative flex flex-col md:flex-row ${reversed ? "md:flex-row-reverse" : "" } items-center mb-12`} > 
      <div className="relative md:w-1/2 flex justify-center p-4"> 
        <img src={image} alt={title} className="rounded-lg shadow-lg transform transition duration-300 hover:scale-110 w-full md:w-4/5" /> 
      </div> 
      <div className="md:w-1/2 text-center md:text-left p-6 md:p-12"> 
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2> 
        <p className="text-gray-400 text-sm mb-4">{date}</p> 
        <div className="flex justify-center md:justify-start space-x-4"> 
          <Link to={githubLink} className="inline-flex items-center px-4 py-2 text-white bg-purple-800 rounded-lg hover:bg-purple-500 transition-colors" > View Code </Link> 
          <Link to={projectLink} className="inline-flex items-center px-4 py-2 text-purple-800 bg-white rounded-lg hover:bg-purple-600 hover:text-white transition-colors" > View Project </Link> 
        </div> 
        <div className={`absolute top-4 ${reversed ? "left-4" : "right-4"} text-white transition-transform transform hover:scale-125`} > 
          <FaTimes className="text-3xl" /> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
const ProjectsPage = () => { 
  return ( 
    <div className="text-white py-20 px-4 sm:px-6 lg:px-20"> 
      <div className="bg-gradient-to-tr from-fuchsia-800 from-25% via-slate-900 to-purple-900 container mx-auto p-8 rounded-lg shadow-lg"> 
        <h1 className="text-4xl font-bold text-center text-white mb-12"> My Projects </h1> 
        <div className="space-y-12"> 
          {projects.map((project, index) => ( 
            <Project key={index} {...project} reversed={index % 2 === 1} /> 
          ))} 
        </div> 
      </div> 
    </div>  
  ); 
}; 
export default ProjectsPage;
