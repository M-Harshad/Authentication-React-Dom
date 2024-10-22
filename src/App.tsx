import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/home/LoginPage";
import HomePage from "./pages/home/HomePage";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage setIsAuthenticated={setIsAuthenticated} />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/dashboard",
      element: (<ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard/>
                </ProtectedRoute>
      ),

    },

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

