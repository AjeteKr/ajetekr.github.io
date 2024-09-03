
import React from 'react';
const BlazorBankManagementPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 to-blue-600 p-6">
      <h1 className="text-6xl font-extrabold text-white text-center mb-6">Blazor Bank Management System</h1>
      <p className="text-lg text-white text-center mb-4">
        A secure and efficient web application for managing bank accounts, built with Blazor.
      </p>
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Key Features</h2>
        <ul className="list-disc list-inside mb-4 text-gray-600">
          <li>🔒 High Security: Utilizes the latest technologies for data security and user authentication.</li>
          <li>📊 Information Display: View account details, including recent transactions and balance.</li>
          <li>💸 Fund Transfers: Perform fund transfers between accounts within the platform.</li>
          <li>🛠️ Account Management: Add, modify, and delete bank accounts easily.</li>
          <li>⚡ Powered by Blazor: Delivers a rich and dynamic user experience.</li>
        </ul>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">How to Contribute</h2>
        <p className="text-gray-600 mb-4">
          We welcome community contributions! Open an issue to discuss changes or submit a pull request with your modifications.
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Authors</h2>
        <p className="text-gray-600 mb-4">
          Developed by Ajete Krasniqi, Edi Krasniqi, Miranda Osmanaj, Muhamed Elezaj. 
        </p>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">License</h2>
        <p className="text-gray-600">
          Licensed under the <a href="link to the MIT license" className="text-blue-500 hover:underline">MIT License</a>.
        </p>
      </div>
      <div className="text-center mt-6">
        <a href="https://github.com/AjeteKr/BlazorBankManagementSystem" className="text-blue-500 hover:underline text-lg">View on GitHub</a>
      </div>
    </div>
  );
}
export default BlazorBankManagementPage;
