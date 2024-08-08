import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const navListMenuItems = [
  { title: "ToDoList", href: "/projects/todolist" },
  { title: "LakeXplorer", href: "/projects/lakexplorer" },
  { title: "GwenStem", href: "/projects/gwenstem" },
  { title: "BlazorBankManagementSystem", href: "/projects/bankmanagement" },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-gray-800">My Projects</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isMenuOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border rounded shadow-md z-50">
          {navListMenuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              <div className="font-semibold text-gray-800">{item.title}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function NavList() {
  return (
    <ul className="flex flex-col lg:flex-row lg:items-center gap-4">
      <li>
        <NavListMenu />
      </li>
      <li>
        <a href="/#home" className="text-gray-800 text-sm">
          Home
        </a>
      </li>
      <li>
        <a href="/#about" className="text-gray-800 text-sm">
          About Me
        </a>
      </li>
      <li>
        <a href="/#technologies" className="text-gray-800 text-sm">
          Technologies
        </a>
      </li>
      <li>
        <a href="/#contact">
          <button className="bg-white text-purple-600 px-4 py-2 rounded-full hover:bg-gray-200 text-sm">
            Hire Me
          </button>
        </a>
      </li>
    </ul>
  );
}

function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleIsNavOpen = () => {
    setIsNavOpen(!isNavOpen);
    if (isProfileMenuOpen) setIsProfileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-gray-800">
          AJETE KRASNIQI
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <NavList />
        </div>
        <button className="lg:hidden flex items-center" onClick={toggleIsNavOpen}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isNavOpen && (
        <div className="lg:hidden">
          <NavList />
        </div>
      )}
    </nav>
  );
}

export default ComplexNavbar;
