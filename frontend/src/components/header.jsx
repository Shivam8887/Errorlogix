import React from "react";

const Header = () => {
  return (
  <div className="p-1 mx-auto text-center">
  <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg mb-8">
    <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
      ERRORLOGIX
    </h1>
    <div className="space-x-6 text-lg">
    <a
        href="#blogs"
        className="hover:text-yellow-300 transition-colors duration-300 underline decoration-transparent hover:decoration-yellow-300 decoration-2 underline-offset-4"
        aria-label="About"
      >
        Blogs
      </a>
    <a
        href="#about"
        className="hover:text-yellow-300 transition-colors duration-300 underline decoration-transparent hover:decoration-yellow-300 decoration-2 underline-offset-4"
        aria-label="About"
      >
        About
      </a>

      
      <a
  href="#contact"
  className="hover:text-yellow-300 transition-colors duration-300 underline decoration-transparent hover:decoration-yellow-300 decoration-2 underline-offset-4"
  aria-label="Contact"
>
  Contact
</a>

    </div>
  </nav>
</div>
  )
};



const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6  flex flex-col items-center space-y-4" id="contact">
      <p className="text-lg">Connect with us:</p>
      <div className="flex space-x-6 text-xl">
        <a href="https://github.com/Shivam8887" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">GitHub</a>
        <a href="https://www.linkedin.com/in/shivam-pandey-a6274b2b5/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">LinkedIn</a>
        <a href="mailto:shivamgkp7317@gmail.com" className="hover:text-gray-400 transition duration-300">Gmail</a>
      </div>
    </footer>
  );
};
export {Footer,Header};