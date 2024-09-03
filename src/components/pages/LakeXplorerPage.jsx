
import React from "react";
const LakeXplorerPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-400 to-blue-500 p-6">
      <h1 className="text-6xl font-extrabold text-white text-center mb-6">LakeXplorer Project</h1>
      <p className="text-lg text-white text-center mb-4">
        Discover beautiful lakes, view details, and share your lake sightings with LakeXplorer!
      </p>
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>C# ASP.NET Core MVC, Razor, Blazor</li>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Entity Framework</li>
          <li>Microsoft SQL Server</li>
          <li>JWT for Authentication</li>
        </ul>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Features</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>User Model with fields: email, username, password.</li>
          <li>JWT-based authentication for secure communication.</li>
          <li>Lake Model with properties: name, image, and description.</li>
          <li>Lake Sighting Model with properties: longitude, latitude, user reference, lake reference, image, and a fun fact of the day.</li>
          <li>Like Model with user reference and lake sighting reference.</li>
        </ul>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Scenarios</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>Unregistered users can register.</li>
          <li>Not logged-in users can log in and request an authentication token.</li>
          <li>Users can see a list of lakes.</li>
          <li>Users can see sightings for a specific lake.</li>
        </ul>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Installation and Setup</h2>
        <p className="text-gray-600 mb-4">
          1. Clone this repository.<br/>
          2. Ensure you have the .NET SDK and Visual Studio (or any code editor) installed.<br/>
          3. Configure your database connection in appsettings.json.<br/>
          4. Run the migration with <code className="bg-gray-200 p-1 rounded">dotnet ef database update</code> to apply the database schema.<br/>
          5. Start the application with <code className="bg-gray-200 p-1 rounded">dotnet run</code>.
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Usage</h2>
        <p className="text-gray-600 mb-4">
          Register and log in to start exploring lakes.<br/>
          Create new lake sightings and like the sightings you find interesting.<br/>
          Enjoy exploring and sharing your favorite lakes with others!
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Tests</h2>
        <p className="text-gray-600 mb-4">
          The project includes comprehensive tests to cover all the listed requirements. You can run tests by executing <code className="bg-gray-200 p-1 rounded">dotnet test</code> in the terminal.
        </p>
      </div>
      <div className="text-center mt-6">
        <a href="https://github.com/AjeteKr/LakeXplorer" className="text-blue-500 hover:underline text-lg">View on GitHub</a>
      </div>
    </div>
  );
}
export default LakeXplorerPage;
