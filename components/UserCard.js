/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';

function UserCard({ userObj }) {
  const { user } = useAuth();

  return (
    <Card style={{ width: '18rem' }} className={userObj.isTherapist ? 'userCard' : 'noShow'}>
      <Card.Img variant="top" src={userObj?.photo} />
      <Card.Body>
        <Card.Title>{userObj?.name}</Card.Title>
        <Card.Text>{userObj?.email}</Card.Text>
        <Card.Text>{userObj?.phone}</Card.Text>
        <Card.Text>{userObj?.pronouns}</Card.Text>
        <Card.Text className="contentPreview">{userObj.bio}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Link href={`/user/${userObj.firebaseKey}`} passHref>
          <Button variant="primary">VIEW</Button>
        </Link>
        <Link href={`/user/edit/${userObj.firebaseKey}`} passHref>
          <Button variant="success" className={userObj.uid !== user.uid ? 'noShow' : ''}>
            EDIT
          </Button>
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
    pronouns: PropTypes.string,
    isTherapist: PropTypes.bool,
    uid: PropTypes.string,
    sexualOrientation: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default UserCard;
