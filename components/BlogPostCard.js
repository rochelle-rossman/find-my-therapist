/* eslint-disable react/style-prop-object */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
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
      <div className="mb-3 d-flex">
        <Card style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img className="blogCardPhoto" src={blogObj.photo} />
          <Card.Body>
            <Card.Title>{blogObj.title}</Card.Title>
            <Card.Text className="contentPreview">{blogObj.content}</Card.Text>
            <p>{blogObj.timeStamp}</p>
            <Button variant="danger" className={blogObj.uid !== user.uid ? 'noShow' : ''} onClick={deleteThisPost}>
              DELETE
            </Button>
            <Link href={`/blog/edit/${blogObj.firebaseKey}`} passHref>
              <Button variant="primary" className={blogObj.uid !== user.uid ? 'noShow' : ''}>
                EDIT
              </Button>
            </Link>
            <Link href={`/blog/${blogObj.firebaseKey}`} passHref>
              <Button variant="success">READ MORE</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
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
