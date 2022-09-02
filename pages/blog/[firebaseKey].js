/* eslint-disable @next/next/no-img-element */
// import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import viewBlogDetails from '../../api/mergedData';

export default function ViewBlog() {
  const [blogDetails, setBlogDetails] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewBlogDetails(firebaseKey).then(setBlogDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      <div>
        <img src={blogDetails.photo} alt={blogDetails.title} style={{ width: 'auto' }} />
      </div>
      <div className="text-black ms-5 details">
        <h3>{blogDetails.title}</h3>
        <h5>
          by <a href={`/user/${blogDetails.userObject?.firebaseKey}`}>{blogDetails.userObject?.name}</a>
        </h5>
        <h6>{blogDetails.timeStamp}</h6>
        <hr />
        <p>{blogDetails.content}</p>
        <hr />
        <h6>
          Email: <a href={`mailto:${blogDetails.userObject?.email}`}>{blogDetails.userObject?.email}</a>
        </h6>
      </div>
    </div>
  );
}
