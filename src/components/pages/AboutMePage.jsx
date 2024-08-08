import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaStar, FaCertificate, FaLanguage, FaPlus, FaMinus } from 'react-icons/fa';
import MyProfileImage from "../../img/myprofile2.jpeg";

function AboutMePage() {
  const [activeSection, setActiveSection] = useState('workExperience');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const sections = {
    workExperience: (
      <div className="space-y-4">
        <div className="border-l-4 border-purple-300 pl-4 bg-purple-200 text-white rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Junior Credit Administrator</h3>
              <p>📍 BPB, Pristina, Kosovo</p>
            </div>
            <h3 className="font-semibold">04/2024-Present</h3>
            <button onClick={() => toggleSection('workExperience1')} className="text-purple-700">
              {expandedSections['workExperience1'] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {expandedSections['workExperience1'] && (
            <ul className="list-none pl-5 space-y-2">
              <li>I manage and process loan applications, evaluate credits, and ensure that all procedures comply with bank policies and financial regulations</li>
            </ul>
          )}
        </div>
        <div className="border-l-4 border-purple-300 pl-4 bg-purple-200 text-white rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Intern Credit Administration</h3>
              <p>📍 BPB, Pristina, Kosovo</p>
            </div>
            <h3 className="font-semibold">02/2024-04/2024</h3>
            <button onClick={() => toggleSection('workExperience2')} className="text-purple-700">
              {expandedSections['workExperience2'] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {expandedSections['workExperience2'] && (
            <ul className="list-none pl-5 space-y-2">
              <li>As a Credit Administration Intern, I assist in managing and processing loan applications, perform preliminary credit evaluations, and ensure that all documentation and procedures adhere to bank policies and financial regulations. I also support the credit team in maintaining accurate records and providing excellent customer service.
              </li>
            </ul>
          )}
        </div>
        <div className="border-l-4 border-purple-300 pl-4 bg-purple-200 text-white rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Junior Program</h3>
              <p>📍 BPB, Pristina, Kosovo</p>
            </div>
            <h3 className="font-semibold">12/2023-02/2024</h3>
            <button onClick={() => toggleSection('workExperience3')} className="text-purple-700">
              {expandedSections['workExperience3'] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {expandedSections['workExperience3'] && (
            <ul className="list-none pl-5 space-y-2">
              <li>As a participant in the BPB Junior Program, I engaged in comprehensive training and development, rotating through various departments to gain hands-on experience in different banking functions. My responsibilities included assisting with customer service, processing transactions, and supporting team projects, all while adhering to bank policies and financial regulations. This program provided me with valuable skills in financial markets, professional communication, and problem-solving.</li>
            </ul>
          )}
        </div>
      </div>
    ),
    education: (
      <div className="space-y-4">
        <div className="border-l-4 border-purple-300 pl-4 bg-purple-200 text-white rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Financial Mathematics in Banking and Insurance</h3>
              <p>📍 University of Pristina, Pristina, Kosovo</p>
            </div>
            <h3 className="font-semibold">10/2019-Present</h3>
            <button onClick={() => toggleSection('education1')} className="text-purple-700">
              {expandedSections['education1'] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {expandedSections['education1'] && (
            <ul className="list-none pl-5 space-y-2">
              <li>Algorithm, Java Programming, Web Programming with HTML, CSS and JS, Data with R</li>
              <li>Problem solving, Quantitative analysis, Data interpretation, Financial decision-making</li>
            </ul>
          )}
        </div>
        <div className="border-l-4 border-purple-300 pl-4 bg-purple-200 text-white rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">C# .NET Developer</h3>
              <p>📍 PerProgramera, Online</p>
            </div>
            <h3 className="font-semibold">11/2022-09/2023</h3>
            <button onClick={() => toggleSection('education2')} className="text-purple-700">
              {expandedSections['education2'] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {expandedSections['education2'] && (
            <ul className="list-none pl-5 space-y-2">
              <li>C# Fundamentals: Variables, Classes, Objects, Methods, and Object-Oriented Programming</li>
              <li>C# programming with Visual Studio IDE</li>
              <li>.NET Framework and .NET Core</li>
              <li>C# database basics: SQL Server and Entity Framework</li>
              <li>Data and data structures in C#: Arrays, Lists, Stacks, Queues, and Dictionaries</li>
              <li>Desktop application development with WPF</li>
              <li>Web application development with ASP.NET Core and MVC</li>
              <li>Using RESTful API in C#</li>
              <li>Debugging in C#</li>
              <li>Cryptography and Security in C#</li>
              <li>Asynchronous Programming with Async Await and webApi</li>
              <li>Web app Ui with Blazor</li>
              <li>Platform independent application with MAUI.NET</li>
            </ul>
          )}
        </div>
        <div className="border-l-4 border-purple-300 pl-4 bg-purple-200 text-white rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">React Developer</h3>
              <p>📍 Udemy, Online</p>
            </div>
            <h3 className="font-semibold">05/2024-07/2024</h3>
             <button onClick={() => toggleSection('education6')} className="text-purple-700">
              {expandedSections['education6'] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {expandedSections['education6'] && (
            <ul className="list-none pl-5 space-y-2">
              <li>React Fundamentals: Mastery of the core concepts of React, including components, JSX, state, and props.</li>
              <li>Component Lifecycle: Understanding the lifecycle methods of React components and how to manage component state and side effects using hooks like 'useState' and 'useEffect'.</li>
              <li>Routing: Ability to implement client-side routing in a React application using React Router.</li>
              <li>State Management with Redux: Proficiency in managing application state using Redux, including actions, reducers, and the Redux store.</li>
              <li>Asynchronous Operations: Handling asynchronous operations in React using Redux Thunk and integrating with APIs.</li>
              <li>Advanced React Patterns: Knowledge of advanced React patterns like higher-order components, context API, and render props.</li>
              <li>Testing: Skills in writing unit tests for React components using tools like Jest and Enzyme.</li>
              <li>Performance Optimization: Techniques for optimizing the performance of React applications.</li>
              <li>Project Deployment: Experience in deploying React applications to production environments.</li>
            </ul>
          )}
        </div>
        <div className="border-l-4 border-purple-300 pl-4 bg-purple-200 text-white rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Network Administrator</h3>
              <p>📍 Infotech - Xpertt, Pristina, Kosovo</p>
            </div>
            <h3 className="font-semibold">02/2023-05/2023</h3>
            <button onClick={() => toggleSection('education3')} className="text-purple-700">
              {expandedSections['education3'] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {expandedSections['education3'] && (
            <ul className="list-none pl-5 space-y-2">
              <li>Network: Network Fundamentals, IPv4 Routing and IPv6, Layer 2 Technologies, Layer 3 Routing, OSPF, BGP, Services</li>
              <li>Systems: Windows Server Fundamentals, Implementing DNS servers, Active Directory and Group Policy, Linux Fundamentals, Linux Server DNS, DHCP, Mail, Linux Security</li>
              <li>Virtualization - Virtualized Servers Fundamentals, Virtual machine management, Configuring and managing virtual networks</li>
              <li>Automation - Python Programming, Python Automation Fundamental</li>
            </ul>
          )}
        </div>
        <div className="border-l-4 border-purple-300 pl-4 bg-purple-200 text-white rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Front End Developer</h3>
              <p>📍 SHPIK, Online</p>
            </div>
            <h3 className="font-semibold">05/2023-07/2023</h3>
            <button onClick={() => toggleSection('education4')} className="text-purple-700">
              {expandedSections['education4'] ? <FaMinus /> : <FaPlus />}
            </button>
          </div>
          {expandedSections['education4'] && (
            <ul className="list-none pl-5 space-y-2">
              <li>HTML5, CSS, JS, Git</li>
              <li>Angular, React</li>
            </ul>
          )}
        </div>
      </div>
    ),
    skills: (
      <ul className="grid grid-cols-2 gap-4 bg-purple-200 rounded-lg p-6 shadow-lg">
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Management Time</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Project Management</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Interpersonal Communication</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Problem Solving</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Adaptability</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Leadership & Collaboration</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Attention to Detail</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Critical Thinking & Creativity</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Work Ethic</li>
        <li className="bg-white text-purple-800 hover:bg-purple-400 transition duration-300 p-4 rounded-lg text-center">Self-learning</li>
      </ul>
    ),
    certifications: (
      <ul className="list-none p-6 bg-purple-200 rounded-lg shadow-lg">
        <li className="relative mb-6">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5"></div>
          <div className="p-4 bg-white text-purple-800 rounded-lg shadow-md">C# .NET Developer, PerProgramera – 09/2023</div>
        </li>
        <li className="relative mb-6">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5"></div>
          <div className="p-4 bg-white text-purple-800 rounded-lg shadow-md">Network Administrator, Infotech – 05/2023</div>
        </li>
        <li className="relative mb-6">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5"></div>
          <div className="p-4 bg-white text-purple-800 rounded-lg shadow-md">Cybersecurity Laws, Open Data – 03/2023</div>
        </li>
        <li className="relative mb-6">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5"></div>
          <div className="p-4 bg-white text-purple-800 rounded-lg shadow-md">Shaping the Future, ICK – 12/2022</div>
        </li>
        <li className="relative mb-6">
          <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5"></div>
          <div className="p-4 bg-white text-purple-800 rounded-lg shadow-md">Emotional Intelligence, IJR Student – 11/2022</div>
        </li>
      </ul>
    ),
    languages: (
      <ul className="flex flex-col space-y-4 bg-purple-200 rounded-lg p-6 shadow-lg">
        <li className="relative bg-white text-purple-900 hover:bg-purple-300 transition duration-300 p-4 rounded-lg flex items-center justify-between transform hover:translate-x-1 hover:shadow-lg cursor-pointer">
          <span className="font-semibold">Albanian</span>
          <span className="text-purple-600">🌍</span>
        </li>
        <li className="relative bg-white text-purple-900 hover:bg-purple-300 transition duration-300 p-4 rounded-lg flex items-center justify-between transform hover:translate-x-1 hover:shadow-lg cursor-pointer">
          <span className="font-semibold">English</span>
          <span className="text-purple-600">🌍</span>
        </li>
      </ul>
    ),
  };

  return (
    <div id="about" className="bg-gradient-to-r from-purple-500 to-pink-500 min-h-screen flex flex-col items-center p-20">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <img
            src={MyProfileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
          />
          <h1 className="text-5xl font-bold text-purple mb-2">Ajete Krasniqi</h1>
          <p className="text-lg text-purple-">
            Passionate software developer with a diverse background in technology and banking.
          </p>
        </div>
        <div className="w-full">
          <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-8">
              {Object.keys(sections).map((section) => (
                <div
                  key={section}
                  className={`cursor-pointer rounded-full bg-white text-purple-600 h-24 w-24 text-lg font-semibold text-center flex items-center justify-center transition-colors ${
                    activeSection === section ? 'bg-purple-400 text-white' : ''
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  {section === 'workExperience' && <FaBriefcase />}
                  {section === 'education' && <FaGraduationCap />}
                  {section === 'skills' && <FaStar />}
                  {section === 'certifications' && <FaCertificate />}
                  {section === 'languages' && <FaLanguage />}
                </div>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3">
              {sections[activeSection]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMePage;