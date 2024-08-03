import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/contact', text: 'Contact Us' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white shadow-md sticky h-20 top-0 z-50 flex items-center px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-700">turant</span>
            <span className="text-teal-600">lo</span>
          </div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              // <NavLink 
              //   key={index} 
              //   to={link.to} 
              //   className="text-black hover:text-blue-700 transition-all ease-in-out duration-150 font-semibold"
              //   activeClassName="text-blue-700"
              // >
              //   {link.text}
              // </NavLink>
              <NavLink
                  to={link.to}
                  key={index}
                  className={({ isActive }) =>
                    `text-black hover:text-blue-700 transition-all ease-in-out duration-150 font-semibold
                  ${
                    isActive
                      ? "text-blue-700"
                      : "text-black"
                  }`
                  }
                >
                  {link.text}
                </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 right-0 bg-gray-800 bg-opacity-75 z-[99] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex flex-col p-4 w-64 bg-white h-full">
          <button onClick={closeMenu} className="self-end text-black text-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {navLinks.map((link, index) => (
            // <NavLink key={index} to={link.to} onClick={closeMenu} className="text-black py-2 px-4 hover:text-blue-700 transition-all ease-in-out duration-150 font-semibold">{link.text}</NavLink>
            <NavLink
            to={link.to}
            key={index}
            onClick={closeMenu}
            className={({ isActive }) =>
              `text-black hover:text-blue-700 transition-all ease-in-out duration-150 font-semibold
            ${
              isActive
                ? "text-blue-700"
                : "text-black"
            }`
            }
          >
            {link.text}
          </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;