/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { deleteUser } from '../api/userData';

function UserCard({ userObj, onUpdate }) {
  const deleteThisUser = () => {
    if (window.confirm(`Delete ${userObj.name}?`)) {
      deleteUser(userObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userObj?.photo} />
      <Card.Body>
        <Card.Title>{userObj?.name}</Card.Title>
        <Card.Text>{userObj?.email}</Card.Text>
        <Card.Text>{userObj?.phone}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="danger" onClick={deleteThisUser}>
          DELETE
        </Button>
        <Link href={`/user/${userObj.firebaseKey}`} passHref>
          <Button variant="primary">VIEW</Button>
        </Link>
        <Link href={`/user/edit/${userObj.firebaseKey}`} passHref>
          <Button variant="success">EDIT</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

UserCard.propTypes = {
  userObj: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    photo: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UserCard;
