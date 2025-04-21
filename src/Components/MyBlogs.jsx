import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchMyBlogs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/myblogs`, {
        withCredentials: true, 
      });
      console.log(response);

      setBlogs(response.data.data.content || []);
    } catch (error) {
      console.error("Error fetching user blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBlog = () => {
    navigate("/createblog"); 
  };

  const handleDelete = async (blogId) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/blogs/${blogId}`, {
        withCredentials: true, 
      });
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== blogId));
      console.log(`Blog with ID ${blogId} deleted successfully.`);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Blogs</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : blogs.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-500 mb-4">No blogs found.</p>
          <button
            onClick={handleCreateBlog}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Create Blog
          </button>
        </div>
      ) : (
        <div className="grid gap-4">
          {blogs?.map((blog) => (
            <div
              key={blog.id}
              className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-lg transition-shadow"
            >
              <div
                className="cursor-pointer"
                onClick={() => navigate(`/blogs/${blog.id}`)}
              >
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-700 mt-2 line-clamp-2">
                  {blog.content}
                </p>
              </div>

              {}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => navigate(`/editblog/${blog.id}`)}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {}
    </div>
  );
};

export default MyBlogs;
