import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import viewBlogDetails from '../../api/mergedData';
import BlogDetails from '../../components/BlogDetails';

export default function ViewBlog() {
  const [blogDetails, setBlogDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewBlogDetails(firebaseKey).then(setBlogDetails);
  }, [firebaseKey]);

  return (
    <BlogDetails blogDetails={blogDetails} />
  );
}
