/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getBlogPosts } from '../../api/blogData';
import { getUsersByUid } from '../../api/userData';
import BlogPostCard from '../../components/BlogPostCard';
import Search from '../../components/Search';
import { useAuth } from '../../utils/context/authContext';

export default function Blog() {
  const { user } = useAuth();
  const router = useRouter();
  const [blogPosts, setBlogPosts] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const getAllBlogs = () => {
    getBlogPosts().then((blogArray) => {
      setBlogPosts(blogArray);
      setFilteredBlogs(blogArray);
    });
  };

  const checkUserProfile = () => {
    if (user.uid) {
      getUsersByUid(user.uid).then((userObj) => {
        if (!Object.values(userObj).length) {
          router.push('/');
        }
      });
    }
  };

  useEffect(() => {
    checkUserProfile();
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
