import React from 'react';
import { Link } from 'react-router-dom';

const NavigationComponent: React.FC = () => {
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
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Todo List</h3>
            <p>A simple and intuitive Todo List application to manage tasks efficiently.</p>
            <Link to="/todolist" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
              View Project
            </Link>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Dynamic Form Builder</h3>
            <p>Create dynamic forms easily with this builder, supporting various input types.</p>
            <Link to="/dynamicform" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
              View Project
            </Link>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Authentication Required</h3>
            <p>You need to be logged in to view the projects. Please log in.</p>
            <p className="text-sm text-neutral-500 italic">// use 'user001' 'pass001' to access dashboard</p>
            <Link to="/login" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
              Go to Login
            </Link>
          </div>

        </div>
      </main>

      <footer className="bg-blue-600 p-4 mt-6 text-center">
        <p className="text-white">© {new Date().getFullYear()} My Projects</p>
      </footer>
    </div>
  );
};

export default NavigationComponent;

