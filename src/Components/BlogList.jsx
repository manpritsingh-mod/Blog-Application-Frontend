import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BlogList = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs?page=${page}&size=${size}`);
      console.log(res);
      setBlogs(res.data.data.content);
      setTotalPages(res.data.data.totalPages);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, size]);

  const handleNextPage = () => {
    if (page < totalPages - 1) setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 0) setPage((prev) => prev - 1);
  };

  const handleBlogClick = (blogId) => {
    navigate(`/blogs/${blogId}`); 
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">All Blogs</h1>
      
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid gap-4">
            {blogs.map((blog) => (
              <div 
              key={blog.blogId}
              onClick={() => handleBlogClick(blog.id)} 
              className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-lg transition-shadow cursor-pointer group"
                role="button" 
                tabIndex={0}
              >
                <h2 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                {}
                <p className="text-gray-700 mt-2 line-clamp-2 overflow-hidden">
                  {blog.content}
                </p>
              </div>
            ))}
          </div>
        )
      )}

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevPage}
          disabled={page === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
        >
          Previous
        </button>
        <span className="text-lg font-medium">Page {page + 1} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={page + 1 >= totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
