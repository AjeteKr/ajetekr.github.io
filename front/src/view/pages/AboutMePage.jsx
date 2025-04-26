import React, { useState } from 'react';
import { 
    FaBriefcase, FaGraduationCap, FaTools, FaLanguage,
    FaChevronDown, FaChevronUp, FaCalendar, FaMapMarkerAlt 
} from 'react-icons/fa';

const AboutMePage = () => {
    const [activeTab, setActiveTab] = useState('experience');
    const [expandedItems, setExpandedItems] = useState({});

    const toggleItem = (id) => {
        setExpandedItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const experiences = [
        {
            id: 'exp1',
            title: 'Software Developer',
            company: 'Homera',
            period: '02/2025-Present',
            location: 'Remote',
            type: 'Remote',
            skills: [
                'Rest API',
                'MUD Blazor',
                'JavaScript Query',
                'AZURE Devops & Git'
            ]
        },
        {
            id: 'exp2',
            title: 'Software Engineer & Co-Founder',
            company: 'n\'Rruge',
            period: '11/2024-Present',
            location: 'Remote',
            type: 'Remote',
            skills: [
                'TypeScript, Next.js, .NET, REST API',
                'Real-time data handling, WebSocket communication',
                'Payment gateway integration, security best practices',
                'UI/UX optimization, performance tuning',
                'Project management, leadership, team collaboration'
            ]
        },
        {
            id: 'exp3',
            title: 'Software Engineer',
            company: 'Pabau Clinic Software',
            period: '10/2024-01/2025',
            location: 'Prishtina',
            type: 'On-site',
            skills: [
                'Working with Typescript on a Next.js React framework',
                'Integrating GraphQL APIs',
                'Extending and reusing components from ant.design',
                'Experience with Jest for testing JavaScript applications',
                'Understanding of UX design principles',
                'Experience in delivering in an agile delivery model',
                'Write modern React components from scratch',
                'Solving complex problems within the team'
            ]
        },
        {
            id: 'exp4',
            title: 'Credit Administration and Disbursement Department – Assistant',
            company: 'Banka Per Biznes (BPB)',
            period: '04/2024-09/2024',
            location: 'Prishtina',
            type: 'On-site',
            skills: [
                'Credit Application Review, Loan Disbursement Support, Regulatory Compliance Support',
                'Documentation Management, Administrative Support',
                'Analytical Thinking, Time Management, Team Collaboration'
            ]
        },
        {
            id: 'exp5',
            title: 'Credit Administration and Disbursement Department - Intern',
            company: 'Banka Per Biznes (BPB)',
            period: '02/2024-04/2024',
            location: 'Prishtina',
            type: 'On-site',
            skills: [
                'Credit Administration, Loan Disbursement, Compliance and Documentation',
                'Risk Assessment, Loan Monitoring',
                'Detail-Oriented, Analytical Thinking, Organization, Problem-Solving'
            ]
        },
        {
            id: 'exp6',
            title: 'Program Junior',
            company: 'Banka Per Biznes (BPB)',
            period: '12/2023-01/2024',
            location: 'Prishtina',
            type: 'On-site',
            skills: [
                'Financial Analysis, Customer Service, Account Management, Banking Systems, Regulatory Knowledge',
                'Effective Communication, Teamwork, Problem-Solving, Time Management, Professional Ethics'
            ]
        }
    ];

    const education = [
        {
            id: 'edu1',
            degree: 'Financial Mathematics in Banking and Insurance',
            institution: 'University of Pristina "Hasan Prishtina"',
            period: '10/2019-06/2024',
            location: 'Prishtina',
            details: [
                'Economics: Financial Analysis, Tax Compliance, Risk Assessment',
                'Mathematics: Quantitative Analysis, Actuarial Concepts',
                'Technology: MS Office, R, HTML, CSS, JS, Java'
            ]
        },
        {
            id: 'edu2',
            degree: 'Master Node JS & Deno.js',
            institution: 'Udemy',
            period: '10/2024-Present',
            location: 'Online',
            details: [
                'Technologies: Node.js, Express.js, MySQL (Sequelize), MongoDB (Mongoose), Stripe.js, GraphQL, WebSockets, TypeScript, Deno.js',
                'Key Skills: REST APIs, Authentication, File Upload, MVC Pattern, Deployment, Automated Testing'
            ]
        },
        {
            id: 'edu3',
            degree: 'React - The Complete Guide 2024 (incl. Next.js, Redux)',
            institution: 'Udemy',
            period: '08/2024-10/2024',
            location: 'Online',
            details: [
                'Technologies: React.js, Redux, Redux Toolkit, Next.js, React Router, TypeScript, Tailwind, Framer Motion',
                'Skills: Components, Hooks, Form Actions, Server Components, State Management, Authentication, Animations, Unit Testing, Deployment',
                'Tools & Practices: Styled Components, CSS Modules, Debugging, Portals, Http Requests, and Best Practices'
            ]
        },
        {
            id: 'edu4',
            degree: 'C# .NET Developer',
            institution: 'PerProgramera',
            period: 'Ongoing',
            location: 'Online',
            details: [
                'Technologies: C#, .NET Framework, .NET Core, SQL Server, Entity Framework, ASP.NET Core, Blazor, MAUI.NET',
                'Skills: OOP, RESTful APIs, Asynchronous Programming, Debugging, Security',
                'Development Areas: Desktop apps, web apps, UI design, and platform-independent applications'
            ]
        }
    ];

    const skills = {
        'Programming & Frameworks': ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express.js', 'C#', '.NET', 'ASP.NET Core', 'Blazor'],
        'Tools & Libraries': ['Redux', 'Tailwind CSS', 'Ant Design', 'Jest', 'GraphQL', 'REST APIs', 'MongoDB', 'MySQL'],
        'Development Practices': ['MVC Pattern', 'Agile', 'Authentication', 'Deployment', 'Asynchronous Programming'],
        'UI/UX & Design': ['Component-based architecture', 'responsive design', 'UX principles'],
        'Soft Skills': ['Analytical Thinking', 'Collaboration', 'Problem-Solving', 'Time Management']
    };

    const languages = [
        { language: 'Albanian', proficiency: 'Native' },
        { language: 'English', proficiency: 'Professional' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-pink-800 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Navigation Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {[
                        { id: 'experience', icon: FaBriefcase, label: 'Experience' },
                        { id: 'education', icon: FaGraduationCap, label: 'Education' },
                        { id: 'skills', icon: FaTools, label: 'Skills' },
                        { id: 'languages', icon: FaLanguage, label: 'Languages' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                                ${activeTab === tab.id 
                                    ? 'bg-purple-500 text-white shadow-lg' 
                                    : 'bg-white bg-opacity-10 text-purple-200 hover:bg-opacity-20'}`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content Sections */}
                <div className="space-y-6">
                    {/* Experience Section */}
                    {activeTab === 'experience' && (
                        <div className="space-y-6">
                            {experiences.map(exp => (
                                <div key={exp.id} 
                                     className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:bg-opacity-10">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                                                <p className="text-purple-300 text-lg">{exp.company}</p>
                                                <div className="flex items-center gap-4 mt-2 text-purple-200">
                                                    <span className="flex items-center gap-1">
                                                        <FaCalendar className="w-4 h-4" />
                                                        {exp.period}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FaMapMarkerAlt className="w-4 h-4" />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => toggleItem(exp.id)}
                                                className="text-purple-300 hover:text-white transition-colors"
                                            >
                                                {expandedItems[exp.id] ? <FaChevronUp /> : <FaChevronDown />}
                                            </button>
                                        </div>
                                        {expandedItems[exp.id] && (
                                            <div className="mt-4 pl-4 border-l-2 border-purple-500">
                                                <ul className="space-y-2">
                                                    {exp.skills.map((skill, index) => (
                                                        <li key={index} className="text-purple-200">• {skill}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Education Section */}
                    {activeTab === 'education' && (
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id} 
                                     className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                                                <p className="text-purple-300 text-lg">{edu.institution}</p>
                                                <div className="flex items-center gap-4 mt-2 text-purple-200">
                                                    <span className="flex items-center gap-1">
                                                        <FaCalendar className="w-4 h-4" />
                                                        {edu.period}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <FaMapMarkerAlt className="w-4 h-4" />
                                                        {edu.location}
                                                    </span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => toggleItem(edu.id)}
                                                className="text-purple-300 hover:text-white transition-colors"
                                            >
                                                {expandedItems[edu.id] ? <FaChevronUp /> : <FaChevronDown />}
                                            </button>
                                        </div>
                                        {expandedItems[edu.id] && (
                                            <div className="mt-4 pl-4 border-l-2 border-purple-500">
                                                <ul className="space-y-2">
                                                    {edu.details.map((detail, index) => (
                                                        <li key={index} className="text-purple-200">• {detail}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Skills Section */}
                    {activeTab === 'skills' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(skills).map(([category, skillList]) => (
                                <div key={category} 
                                     className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
                                    <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillList.map((skill, index) => (
                                            <span key={index} 
                                                  className="px-3 py-1 bg-purple-500 bg-opacity-20 rounded-full text-purple-200 text-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Languages Section */}
                    {activeTab === 'languages' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {languages.map((lang, index) => (
                                <div key={index} 
                                     className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white">{lang.language}</h3>
                                    <p className="text-purple-300 mt-2">{lang.proficiency}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default AboutMePage;