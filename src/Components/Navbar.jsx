import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../Auth/AuthContext';
import axios from 'axios';

export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated} = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/logout`, {}, { withCredentials: true });
      setIsAuthenticated(false);
      navigate('/');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md px-6 py-4 flex justify-between items-center z-50">
      <Link to="/" className="text-xl font-bold text-blue-600">
        BLOGPOST APP
      </Link>

      <div className="space-x-4">
        {!isAuthenticated ? (
          <>
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Register
            </Link>
          </>
        ) : (
          <>
          <Link
            to="/myblogs"
            className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
          >
            My Blog
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </>
        )}
      </div>
    </nav>
  );
}
