import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationComponent: React.FC = () => {
  // Sample project data
  const projects = [
    { id: 1, title: "Todo List", description: "A simple and intuitive Todo List application to manage tasks efficiently.", link: "/todolist" },
    { id: 2, title: "Dynamic Form Builder", description: "Create dynamic forms easily with this builder, supporting various input types.", link: "/dynamicform" },
    { id: 3, title: "Authentication Required", description: "You need to be logged in to view the projects. Please log in.", link: "/login" },
    // Add more projects here
  ];

  const itemsPerPage = 6; // Number of projects per page
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  // Get current projects
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">My Projects</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Projects Overview</h2>
        <p className="mb-6">
          Here are some of my side projects that showcase my skills in web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentProjects.map((project) => (
            <div key={project.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p>{project.description}</p>
              <Link to={project.link} className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
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
            className="bg-blue-600 text-white px-4 py-2 rounded-l-md hover:bg-blue-700 disabled:opacity-50 transition"
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
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 disabled:opacity-50 transition"
          >
            Next
          </button>
        </div>
      </main>

      <footer className="bg-blue-600 p-4 mt-6 text-center">
        <p className="text-white">© {new Date().getFullYear()} My Projects</p>
      </footer>
    </div>
  );
};

export default NavigationComponent;

