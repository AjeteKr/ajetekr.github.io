import React from "react";
import LakeImage from "../../img/lakexplorer.webp"; 

const LakeXplorerPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-gray-900 p-6">
      <h1 className="text-7xl font-extrabold text-white text-center mb-6">LakeXplore Project</h1>
      
      <img src={LakeImage} alt="LakeXplorer Project" className="w-full max-w-3xl rounded-lg shadow-lg mb-6" />

      <p className="text-lg text-white text-center mb-4">
        Discover beautiful lakes, view details, and share your lake sightings with LakeXplorer!
      </p>
      <p className="text-md text-white text-center mb-8">Date: 2024-09-28</p>

      <div className="bg-gray-800 shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-4xl font-semibold text-white mb-4">Project Description</h2>
        <p className="text-white mb-6">LakeXplorer allows users to explore and share sightings of lakes. Users can add their own sightings, like sightings shared by others, and view details of various lakes.</p>

        <h3 className="text-2xl font-semibold text-white mb-2">Key Features:</h3>
        <ul className="list-none mb-4 text-white space-y-8">
          <li className="mb-8">
            <span className="text-white">User Model with fields: email, username, password.</span>
          </li>
          <li className="mb-8">
            <span className="text-white">JWT-based authentication for secure communication.</span>
          </li>
          <li className="mb-8">
            <span className="text-white">Lake Model with properties: name, image, and description.</span>
          </li>
          <li className="mb-8">
            <span className="text-white">Lake Sighting Model with properties: longitude, latitude, user reference, lake reference, image, and a fun fact of the day.</span>
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Technologies Used:</h3>
        <ul className="list-disc list-inside mb-4 text-white">
          <li className="text-white">C# ASP.NET Core MVC, Razor, Blazor</li>
          <li className="text-white">HTML5, CSS3, JavaScript</li>
          <li className="text-white">Entity Framework</li>
          <li className="text-white">Microsoft SQL Server</li>
          <li className="text-white">JWT for Authentication</li>
        </ul>

        <h3 className="text-2xl font-semibold text-white mb-2">Installation and Setup:</h3>
        <p className="text-white mb-4">
          1. Clone this repository.<br />
          2. Ensure you have the .NET SDK and Visual Studio (or any code editor) installed.<br />
          3. Configure your database connection in appsettings.json.<br />
          4. Run the migration with <code className="bg-gray-900 p-1 rounded">dotnet ef database update</code> to apply the database schema.<br />
          5. Start the application with <code className="bg-gray-900 p-1 rounded">dotnet run</code>.
        </p>

        <h3 className="text-2xl font-semibold text-white mb-2">Usage:</h3>
        <p className="text-white mb-4">
          Register and log in to start exploring lakes.<br />
          Create new lake sightings and like the sightings you find interesting.<br />
          Enjoy exploring and sharing your favorite lakes with others!
        </p>

        <h3 className="text-2xl font-semibold text-white mb-2">Tests:</h3>
        <p className="text-white mb-4">
          The project includes comprehensive tests to cover all the listed requirements. You can run tests by executing <code className="bg-gray-900 p-1 rounded">dotnet test</code> in the terminal.
        </p>
      </div>
      
      <div className="text-center mt-6">
        <a href="https://github.com/AjeteKr/LakeXplorer" className="text-blue-500 hover:underline text-lg">View on GitHub</a>
      </div>
    </div>
  );
};

export default LakeXplorerPage;
