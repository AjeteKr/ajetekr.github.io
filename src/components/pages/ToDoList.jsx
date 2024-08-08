import React from "react";

const ToDoListPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mt-4 mb-4 text-center text-[#1a202c]">ToDoList Project</h1>
      <p className="text-xl mt-2 mb-4 text-center text-[#2d3748]">To-Do List App in ReactJS simplifies daily task management.</p>
      <p className="text-lg mt-2 mb-6 text-center text-[#4a5568]">Date: 2023-11-01</p>
      <div className="bg-white bg-opacity-50 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Project Description</h2>
        <p className="mb-4 text-[#2d3748]">To-Do List App in ReactJS is a simple and user-friendly application for managing daily tasks. Users can add, delete, and mark their tasks as completed within this application. Each added task is securely stored in the application's storage, allowing users to view their tasks even after refreshing the page.</p>
        <h3 className="text-xl font-semibold mb-2 text-[#1a202c]">Key Features:</h3>
        <ul className="custom-list mb-4 text-[#2d3748]">
          <li>Add Tasks: Easily add new tasks by typing the text and clicking "Add."</li>
          <li>Delete Tasks: Remove incomplete tasks from the list by clicking "Delete."</li>
          <li>Complete Tasks: Mark tasks as done to indicate their completion status.</li>
          <li>Storage Persistence: Task data is stored securely, ensuring continuous access.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-[#1a202c]">How to Use:</h3>
        <ul className="custom-list mb-4 text-[#2d3748]">
          <li>Open the application to view existing tasks.</li>
          <li>Add new tasks by typing and clicking "Add."</li>
          <li>Delete tasks by clicking "Delete" for each one.</li>
          <li>Mark tasks as completed by clicking on them.</li>
        </ul>
        <h3 className="text-xl font-semibold mb-2 text-[#1a202c]">Technologies Used:</h3>
        <ul className="custom-list text-[#2d3748]">
          <li>ReactJS: Core framework for application development.</li>
          <li>LocalStorage: Data storage for tasks.</li>
        </ul>
      </div>
      <div className="text-center">
        <a href="https://github.com/AjeteKr/ToDoList" className="text-blue-700 hover:underline mt-2 block text-lg">View on GitHub</a>
      </div>
    </div>
  );
}

export default ToDoListPage;
