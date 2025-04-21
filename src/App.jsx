import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./Components/BlogList";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Register from "./Components/Register"; 
import { AuthProvider } from "./Auth/AuthContext";
import BlogDetail from "./Components/BlogDetail";
import MyBlogs from './Components/MyBlogs';
import CreateBlog from './Components/CreateBlog'; 
import EditBlog from "./Components/EditBlog"; 

function App() {
  return (
    
    <AuthProvider>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="pt-32 px-4">

          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> 
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/myblogs" element={<MyBlogs />} />
            <Route path="/createblog" element={<CreateBlog />} /> {/* Add this route */}
            <Route path="/editblog/:id" element={<EditBlog />} /> {/* Add this route */}
          </Routes>
        </div>
      </div>
    </AuthProvider>
   
  );
}

export default App;