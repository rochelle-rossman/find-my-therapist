/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteBlogPost } from '../api/blogData';
import { useAuth } from '../utils/context/authContext';

function BlogPostCard({ blogObj, onUpdate }) {
  const { user } = useAuth();
  const deleteThisPost = () => {
    if (window.confirm(`Delete ${blogObj.title}?`)) {
      deleteBlogPost(blogObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <section className="light">
        <div className="container py-2">
          <article className="postcard light blue">
            <a className="postcard__img_link" href={`/blog/${blogObj.firebaseKey}`}>
              <img className="postcard__img" src={blogObj.photo} alt={blogObj.title} />
            </a>
            <div className="postcard__text t-dark">
              <h2 className="postcard__title blue">
                <a href={`/blog/${blogObj.firebaseKey}`}>{blogObj.title}</a>
              </h2>
              <div className="postcard__subtitle small">
                <time dateTime={blogObj.timeStamp}>
                  <i className="fas fa-calendar-alt mr-2" />
                  {blogObj.timeStamp}
                </time>
              </div>
              <div className="postcard__bar" />
              <div className="contentPreview">
                {blogObj.content}
              </div>
              <ul className="postcard__tagbox">
                <li className={blogObj.uid !== user.uid ? 'noShow' : 'tag__item'}>
                  <Button variant="link" onClick={deleteThisPost}>
                    DELETE
                  </Button>
                </li>
                <li className={blogObj.uid !== user.uid ? 'noShow' : 'tag__item'}>
                  <Link href={`/blog/edit/${blogObj.firebaseKey}`} passHref>
                    <Button variant="link">EDIT</Button>
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

BlogPostCard.propTypes = {
  blogObj: PropTypes.shape({
    title: PropTypes.string,
    photo: PropTypes.string,
    content: PropTypes.string,
    timeStamp: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default BlogPostCard;
