/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { MdOutlineEmail } from 'react-icons/md';

function BlogDetails({ blogDetails }) {
  return (
    <div className="mt-5 d-flex flex-wrap justify-content-center">
      <div>
        <img src={blogDetails.photo} alt={blogDetails.title} />
      </div>
      <div className="text-black ms-5 details">
        <h3>{blogDetails.title}</h3>
        <h5>
          by <a href={`/user/${blogDetails.author?.firebaseKey}`}>{blogDetails.author?.name}</a>
        </h5>
        <h6>{blogDetails.timeStamp}</h6>
        <hr />
        <p>{blogDetails.content}</p>
        <hr />
        <h6>
          <MdOutlineEmail /> <a href={`mailto:${blogDetails.author?.email}`}>{blogDetails.author?.email}</a>
        </h6>
      </div>
    </div>
  );
}

BlogDetails.propTypes = {
  blogDetails: PropTypes.shape({
    photo: PropTypes.string,
    title: PropTypes.string,
    timeStamp: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      firebaseKey: PropTypes.string,
    }),
  }).isRequired,
};

export default BlogDetails;
