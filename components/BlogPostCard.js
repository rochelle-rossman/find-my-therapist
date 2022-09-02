/* eslint-disable react/style-prop-object */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteBlogPost } from '../api/blogData';

function BlogPostCard({ blogObj, onUpdate }) {
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
            <Button variant="danger" onClick={deleteThisPost}>
              DELETE
            </Button>
            <Link href={`/blog/edit/${blogObj.firebaseKey}`} passHref>
              <Button variant="primary">EDIT</Button>
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
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default BlogPostCard;
