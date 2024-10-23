import React from "react";
import ToDoImage from "../../assets/images/projects/todoimage.png";
import AddTask from "../../assets/images/projects/addtask.png";
import DeleteTask from "../../assets/images/projects/deletetask.png"; 
import CompleteTask from "../../assets/images/projects/completetask.png"; 

const ToDoListPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-gray-900 p-6">
      <h1 className="text-7xl font-extrabold text-white text-center mb-6">ToDoList Project</h1>
      <img src={ToDoImage} alt="ToDoList Project" className="w-full max-w-3xl rounded-lg shadow-lg mb-6" />
      <p className="text-lg text-white text-center mb-4">Your stylish To-Do List App for effortless task management.</p>
      <p className="text-md text-white text-center mb-8">Date: 2023-11-01</p>
      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-semibold text-white mb-4">Project Description</h2>
        <p className="text-white mb-6">This elegant application allows you to manage your daily tasks with ease. Add, delete, and mark tasks as completed, with all data securely stored for your convenience.</p>
        <h3 className="text-2xl font-semibold text-white mb-2">Key Features:</h3>
        <ul className="list-none mb-4 text-white space-y-8">
          <li className="mb-8">
            <span className="text-white">✨ Add Tasks: Quickly add new tasks with a click.</span>
            <img src={AddTask} alt="Add Tasks" className="w-full mt-4 rounded-lg" />
          </li>
          <li className="mb-8">
            <span className="text-white">🗑️ Delete Tasks: Easily remove tasks from your list.</span>
            <img src={DeleteTask} alt="Delete Tasks" className="w-full mt-4 rounded-lg" />
          </li>
          <li className="mb-8">
            <span className="text-white">✅ Complete Tasks: Mark tasks as done with a simple click.</span>
            <img src={CompleteTask} alt="Complete Tasks" className="w-full mt-4 rounded-lg" />
          </li>
          <li className="mb-8">
            <span className="text-white">🔒 Storage Persistence: Your tasks are saved securely.</span>
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mb-2">How to Use:</h3>
        <ul className="list-disc list-inside mb-4 text-white">
          <li className="mb-2 text-white">👀 Open the app to see your tasks.</li>
          <li className="mb-2 text-white">➕ Add new tasks and click "Add."</li>
          <li className="mb-2 text-white">🗑️ Delete tasks by clicking "Delete."</li>
          <li className="mb-2 text-white">✅ Mark tasks as completed by clicking on them.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-white mb-2">Technologies Used:</h3>
        <ul className="list-disc list-inside text-white">
          <li className="mb-2 text-white">⚛️ ReactJS: The core framework for development.</li>
          <li className="mb-2 text-white">💾 LocalStorage: For secure task storage.</li>
        </ul>
      </div>
      <div className="text-center mt-6">
        <a href="https://github.com/AjeteKr/ToDoList" className="text-purple-400 hover:underline text-lg">View on GitHub</a>
      </div>
    </div>
  );
}

export default ToDoListPage;
