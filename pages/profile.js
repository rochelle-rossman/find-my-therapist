import React from 'react';
import { Button } from 'react-bootstrap';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function Profile() {
  const { user } = useAuth();
  return (
    <>
      <div>
        <User image={user.photoURL} email={user.email} name={user.displayName} lastLogin={user.metadata.lastSignInTime} />
      </div>
      <div className="sign-out-btn">
        <Button type="button" onClick={signOut}>
          Sign Out
        </Button>
      </div>
    </>
  );
}
