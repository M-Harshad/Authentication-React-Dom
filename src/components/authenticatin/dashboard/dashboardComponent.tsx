import React from 'react';

const DashboardComponent: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-center">Dashboard</h2>
          <nav className="mt-8">
            <ul>
              <li className="mb-2">
                <a href="#" className="block p-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
                  Profile
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
                  Settings
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block p-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="bg-white shadow-md mb-6 p-4 rounded">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        </header>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widget 1 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
          </div>

          {/* Widget 2 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Total Sales</h2>
            <p className="text-3xl font-bold text-green-600">$12,345</p>
          </div>

          {/* Widget 3 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">New Signups</h2>
            <p className="text-3xl font-bold text-yellow-600">56</p>
          </div>

          {/* Widget 4 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold">Pending Tasks</h2>
            <p className="text-3xl font-bold text-red-600">8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
