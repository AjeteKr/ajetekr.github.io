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
      <button className="flex items-center gap-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="text-gray-800 font-bold">My Projects</span>
        <svg className={`w-4 h-4 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
          {navListMenuItems.map((item) => (
            <Link key={item.title} to={item.href} className="block px-4 py-2 hover:bg-gray-100 text-sm">
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
    <ul className="flex flex-col lg:flex-row lg:items-center gap-6">
      <li>
        <NavListMenu />
      </li>
      <li>
        <Link to="/#home" className="text-gray-800 text-sm hover:text-purple-600 transition"> Home </Link>
      </li>
      <li>
        <Link to="/#about" className="text-gray-800 text-sm hover:text-purple-600 transition"> About Me </Link>
      </li>
      <li>
        <Link to="/#technologies" className="text-gray-800 text-sm hover:text-purple-600 transition"> Technologies </Link>
      </li>
      <li>
        <Link to="/#contact">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition"> Hire Me </button>
        </Link>
      </li>
    </ul>
  );
}
function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => {
    setIsNavOpen(!isNavOpen);
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
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800"> AJETE KRASNIQI </Link>
        <div className="hidden lg:flex items-center gap-6">
          <NavList />
        </div>
        <button className="lg:hidden flex items-center" onClick={toggleIsNavOpen}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
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
