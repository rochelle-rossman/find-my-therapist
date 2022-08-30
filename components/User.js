/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function User({
  image, name, email, lastLogin,
}) {
  return (
    <div>
      <Card style={{ width: '18rem' }} className="profile-card">
        <Card.Img variant="top" src={image} alt={name} className="profile-img" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{lastLogin}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  image: 'https://kangsblackbeltacademy.com/wp-content/uploads/2017/04/default-image.jpg',
  name: '',
  email: '',
  lastLogin: '',
};

export default User;
