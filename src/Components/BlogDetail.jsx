import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs/${id}`, {
          credentials: "include", 
        });

        if (!response.ok) throw new Error("Failed to fetch blog");

        const data = await response.json();
        setBlog(data.data);
        console.log("Fetched blog:", blog);

      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlog(null);
      }
      setLoading(false);
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  if (!blog) return <p className="text-center mt-10">Blog not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 mt-20">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-800 leading-relaxed whitespace-pre-line">
        {blog.content}
      </p>
    </div>
  );
};

export default BlogDetail;
