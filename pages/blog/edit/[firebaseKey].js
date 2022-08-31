import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { getSingleBlogPost } from '../../../api/blogData';
import BlogForm from '../../../components/BlogForm';

export default function EditBlog() {
  const [editBlogObj, setEditBlogObj] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleBlogPost(firebaseKey).then(setEditBlogObj);
  }, [firebaseKey]);

  return (
    <BlogForm obj={editBlogObj} />
  );
}
