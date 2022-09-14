import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { deleteUser, getUsersByUid } from '../api/userData';

export default function Profile() {
  const [member, setMember] = useState({});
  const { user } = useAuth();
  const deleteThisUser = () => {
    if (window.confirm('Delete your account?')) {
      deleteUser(member.firebaseKey).then(() => {
        getUsersByUid(user.uid).then((response) => {
          setMember(response[0]);
        });
      });
    }
  };
  useEffect(() => {
    getUsersByUid(user.uid).then((response) => {
      setMember(response[0]);
    });
  }, [user]);

  return (
    <div className="profile">
      {member?.firebaseKey ? (
        <>
          <User userObj={member} onUpdate={getUsersByUid} />
          <Link passHref href={`/user/edit/${member.firebaseKey}`}>
            <Button type="button" className={member.uid !== user.uid ? 'noShow' : ''} variant="outline-success">
              Edit Profile
            </Button>
          </Link>
          <Button type="button" className={member.uid !== user.uid ? 'noShow' : ''} variant="outline-danger" onClick={deleteThisUser}>
            Delete Account
          </Button>
        </>
      ) : (
        <>
          <Link passHref href="/user/new">
            <Button type="button" variant="outline-success">
              Create Profile
            </Button>
          </Link>
        </>
      )}
    </div>
  );
}
