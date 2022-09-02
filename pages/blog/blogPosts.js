import React, { useEffect, useState } from 'react';
import { getBlogPosts } from '../../api/blogData';
import BlogPostCard from '../../components/BlogPostCard';
import Search from '../../components/Search';

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const getAllBlogs = () => {
    getBlogPosts().then(setBlogPosts);
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <>
      <Search blogs={blogPosts} setFilteredBlogs={setFilteredBlogs} />
      <div className="d-flex flex-wrap">
        {filteredBlogs.map((blog) => (
          <BlogPostCard key={blog.firebaseKey} blogObj={blog} onUpdate={getAllBlogs} className="blogCard" />
        ))}
      </div>
    </>
  );
}
