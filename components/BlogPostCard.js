/* eslint-disable react/style-prop-object */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

function BlogPostCard({ blogObj }) {
  return (
    <>
      <div className="mb-3 d-flex align-items-center">
        <Card style={{ width: '50rem' }}>
          <Card.Img className="blogCardPhoto" src={blogObj.photo} />
          <Card.Body>
            <Card.Title>{blogObj.title}</Card.Title>
            <Card.Text className="contentPreview">{blogObj.content}</Card.Text>
            <p>{blogObj.timeStamp}</p>
            <Button variant="danger">DELETE</Button>
            <Button variant="primary">EDIT</Button>
            <Button variant="success">READ MORE</Button>
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
  }).isRequired,
};

export default BlogPostCard;
