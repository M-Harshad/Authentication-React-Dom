import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/authentication/Login/LoginPage";
import HomePage from "./pages/authentication/home/HomePage";
import Dashboard from "./pages/authentication/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";
import DragDropTodo from "./pages/Drag-Drop-Todo/TodoList";


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
    {
      path: "/todolist",
      element: <DragDropTodo />,
    },

  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

