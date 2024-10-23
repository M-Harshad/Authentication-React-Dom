import React from 'react';

const HomeComponent: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Welcome to My App</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <section className="bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">Home Page</h2>
          <p className="text-gray-700">
            This is a dummy home page created with Tailwind CSS. You can add
            your content here, such as features, services, or anything relevant
            to your application.
          </p>
          <p className="text-gray-700 mt-4">
            Feel free to customize this page as per your requirements!
          </p>
        </section>

        {/* Additional Content */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
          <ul className="list-disc list-inside">
            <li>Feature 1: Explanation of feature 1.</li>
            <li>Feature 2: Explanation of feature 2.</li>
            <li>Feature 3: Explanation of feature 3.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeComponent;
