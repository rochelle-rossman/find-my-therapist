import React, { useEffect, useState } from 'react';
import { getBlogPosts } from '../../api/blogData';
import BlogPostCard from '../../components/BlogPostCard';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const getAllBlogs = () => {
    getBlogPosts().then(setBlogPosts);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {blogPosts.map((blog) => (
        <BlogPostCard key={blog.firebaseKey} blogObj={blog} onUpdate={getAllBlogs} className="blogCard" />
      ))}
    </div>
  );
}
