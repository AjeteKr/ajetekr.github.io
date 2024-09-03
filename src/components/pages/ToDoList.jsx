
import React from "react";
const ToDoListPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 to-pink-500 p-6">
      <h1 className="text-7xl font-extrabold text-white text-center mb-6">ToDoList Project</h1>
      <p className="text-lg text-white text-center mb-4">Your stylish To-Do List App for effortless task management.</p>
      <p className="text-md text-white text-center mb-8">Date: 2023-11-01</p>
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Project Description</h2>
        <p className="text-gray-600 mb-6">This elegant application allows you to manage your daily tasks with ease. Add, delete, and mark tasks as completed, with all data securely stored for your convenience.</p>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li className="mb-2">✨ Add Tasks: Quickly add new tasks with a click.</li>
          <li className="mb-2">🗑️ Delete Tasks: Easily remove tasks from your list.</li>
          <li className="mb-2">✅ Complete Tasks: Mark tasks as done with a simple click.</li>
          <li>🔒 Storage Persistence: Your tasks are saved securely.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">How to Use:</h3>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li className="mb-2">👀 Open the app to see your tasks.</li>
          <li className="mb-2">➕ Add new tasks and click "Add."</li>
          <li className="mb-2">🗑️ Delete tasks by clicking "Delete."</li>
          <li>✅ Mark tasks as completed by clicking on them.</li>
        </ul>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Technologies Used:</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li>⚛️ ReactJS: The core framework for development.</li>
          <li>💾 LocalStorage: For secure task storage.</li>
        </ul>
      </div>
      <div className="text-center mt-6">
        <a href="https://github.com/AjeteKr/ToDoList" className="text-blue-500 hover:underline text-lg">View on GitHub</a>
      </div>
    </div>
  );
}
export default ToDoListPage;
