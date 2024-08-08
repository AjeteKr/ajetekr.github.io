import React from 'react';

const BlazorBankManagementPage = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-bold mt-4 mb-4 text-center text-[#1a202c]">Blazor Bank Management System</h1>
      <p className="text-xl mt-2 mb-4 text-center text-[#2d3748]">
        Blazor Bank Management System is a web application built with Blazor, a modern web framework that allows developers to create interactive web applications using C# instead of traditional JavaScript. This application is designed for secure and efficient management of bank accounts.
      </p>
      <div className="bg-white bg-opacity-50 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Key Features</h2>
        <ul className="custom-list mb-4 text-[#2d3748]">
          <li>High Security: Utilizes the latest technologies for data security and user authentication.</li>
          <li>Information Display: Allows users to view account details, including recent transactions and balance.</li>
          <li>Fund Transfers: Enables users to perform fund transfers between their accounts within the platform.</li>
          <li>Account Management: Provides features for adding, modifying, and deleting bank accounts.</li>
          <li>Powered by Blazor: Harnesses the power of Blazor to deliver a rich and dynamic user experience.</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">How to Contribute</h2>
        <p className="text-[#2d3748] mb-4">
          We welcome community contributions! If you'd like to contribute to this project, please open an issue to discuss any changes you'd like to make or submit a pull request with your modifications.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">Authors</h2>
        <p className="text-[#2d3748] mb-4">
          This project is developed by Ajete Krasniqi, Edi Krasniqi, Miranda Osmanaj, Muhamed Elezaj. Feel free to contact us at:
          <br />
          <a href="mailto:ajetekr@gmail.com" className="text-blue-700 hover:underline">ajetekr@gmail.com</a>,
          <a href="mailto:edikrasniqi1507@gmail.com" className="text-blue-700 hover:underline">edikrasniqi1507@gmail.com</a>,
          <a href="mailto:miranda.osmanaj04@gmail.com" className="text-blue-700 hover:underline">miranda.osmanaj04@gmail.com</a>,
          <a href="mailto:muhamed.elezaj@raiffeisen-kosovo.com" className="text-blue-700 hover:underline">muhamed.elezaj@raiffeisen-kosovo.com</a>
          for any inquiries.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-[#1a202c]">License</h2>
        <p className="text-[#2d3748]">
          This project is licensed under the <a href="link to the MIT license" className="text-blue-700 hover:underline">MIT License</a>.
        </p>
      </div>
      <div className="text-center">
        <a href="https://github.com/AjeteKr/BlazorBankManagementSystem" className="text-blue-700 hover:underline mt-2 block text-lg">View on GitHub</a>
      </div>
    </div>
  );
}

export default BlazorBankManagementPage;
