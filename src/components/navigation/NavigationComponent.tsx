import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavigationComponent: React.FC = () => {
  const projects = [
    { id: 1, title: "Todo List", description: "A simple and intuitive Todo List application to manage tasks efficiently.", link: "/todolist" },
    { id: 2, title: "Dynamic Form Builder", description: "Create dynamic forms easily with this builder, supporting various input types.", link: "/dynamicform" },
    { id: 3, title: "Authentication Required", description: "You need to be logged in to view the projects. Please log in.", link: "/login" },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem('darkMode');
    return storedTheme ? JSON.parse(storedTheme) : false;
  });


  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);


  const totalPages = Math.ceil(projects.length / itemsPerPage);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
      <header className={`p-6 shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-emerald-400'}`}>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">HR IdeaIncubator</h1>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-xl transition ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Projects Overview</h2>
        <p className="mb-6">
          Here are some of my side projects that showcase my skills in web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProjects.map((project) => (
            <div key={project.id} className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className={`mt-2 inline-block ${isDarkMode ? 'text-blue-400 hover:text-blue-600' : 'text-blue-600 hover:text-blue-800'}`}>
                View Project
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-white px-4 py-2 rounded-l-md ${isDarkMode ? 'bg-gray-600' : 'bg-emerald-400'} hover:bg-blue-700 disabled:opacity-50 transition`}
          >
            Previous
          </button>

          <div className="flex items-center mx-2">
            <span className="text-lg">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-white px-4 py-2 rounded-r-md ${isDarkMode ? 'bg-gray-600' : 'bg-emerald-400'} hover:bg-blue-700 disabled:opacity-50 transition`}
          >
            Next
          </button>
        </div>
      </main>

      <footer className={`p-4 mt-6 text-center ${isDarkMode ? 'bg-gray-700' : 'bg-emerald-400'}`}>
        <p>© {new Date().getFullYear()} HR IdeaIncubator</p>
      </footer>
    </div>
  );
};

export default NavigationComponent;

