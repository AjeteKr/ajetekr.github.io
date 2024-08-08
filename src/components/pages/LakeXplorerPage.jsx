import React from "react";

function LakeXplorerPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mt-4 mb-4 text-center text-[#1a202c]">LakeXplorer Project</h1>
      <p className="text-xl mt-2 mb-4 text-center text-[#2d3748]">
        LakeXplorer is a web application that allows users to discover different lakes, view lake details, and share their lake sightings. It provides features for user registration, authentication using JWT tokens, and interacting with the API.
      </p>
      <div className="bg-white bg-opacity-50 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Technologies Used</h2>
        <ul className="custom-list mb-4 text-[#2d3748]">
          <li>C# ASP.NET Core MVC, Razor, Blazor</li>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Entity Framework</li>
          <li>Microsoft SQL Server</li>
          <li>JWT for Authentication</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Features</h2>
        <ul className="custom-list mb-4 text-[#2d3748]">
          <li>User Model with fields: email, username, password.</li>
          <li>JWT-based authentication for secure communication.</li>
          <li>Lake Model with properties: name, image, and description.</li>
          <li>Lake Sighting Model with properties: longitude, latitude, user reference, lake reference, image, and a fun fact of the day.</li>
          <li>Like Model with user reference and lake sighting reference.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Scenarios</h2>
        <ul className="custom-list mb-4 text-[#2d3748]">
          <li>Unregistered users can register.</li>
          <li>Not logged-in users can log in and request an authentication token.</li>
          <li>Users can see a list of lakes.</li>
          <li>Users can see sightings for a specific lake.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Installation and Setup</h2>
        <p className="text-[#2d3748] mb-4">
          1. Clone this repository.<br/>
          2. Ensure you have the .NET SDK and Visual Studio (or any code editor) installed.<br/>
          3. Configure your database connection in appsettings.json.<br/>
          4. Run the migration with <code>dotnet ef database update</code> to apply the database schema.<br/>
          5. Start the application with <code>dotnet run</code>.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Usage</h2>
        <p className="text-[#2d3748] mb-4">
          Register and log in to start exploring lakes.<br/>
          Create new lake sightings and like the sightings you find interesting.<br/>
          Enjoy exploring and sharing your favorite lakes with others!
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Tests</h2>
        <p className="text-[#2d3748] mb-4">
          The project includes comprehensive tests to cover all the listed requirements. You can run tests by executing <code>dotnet test</code> in the terminal.
        </p>
      </div>
      <div className="text-center">
        <a href="https://github.com/AjeteKr/LakeXplorer" className="text-blue-700 hover:underline mt-2 block text-lg">View on GitHub</a>
      </div>
    </div>
  );
}

export default LakeXplorerPage;
