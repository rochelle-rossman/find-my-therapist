import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSingleUser } from '../../api/userData';
import { useAuth } from '../../utils/context/authContext';

export default function ViewUser() {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleUser(firebaseKey).then(setUserDetails);
  }, [firebaseKey]);
  return (
    <>
      <Card style={{ width: '30rem', margin: '10px' }}>
        <Card.Img variant="top" src={userDetails?.photo} />
        <Card.Body>
          <Card.Title>{userDetails?.name}</Card.Title>
          <Card.Text>{userDetails?.email}</Card.Text>
          <Card.Text>{userDetails?.phone}</Card.Text>
          <Card.Text>{userDetails?.pronouns}</Card.Text>
          <Card.Text>{userDetails.bio}</Card.Text>
        </Card.Body>
        <Card.Body>
          <Link href={`/user/${userDetails.firebaseKey}`} passHref>
            <Button variant="primary">VIEW</Button>
          </Link>
          <Button variant="primary">MESSAGE</Button>
          <Button variant="primary">SAVE</Button>
          <Link href={`/user/edit/${userDetails.firebaseKey}`} passHref>
            <Button variant="success" className={userDetails.uid !== user.uid ? 'noShow' : ''}>
              EDIT
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}
