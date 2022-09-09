import { useRouter } from 'next/router';
import React from 'react';
import { signIn } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import { getUsersByUid } from '../api/userData';

function Signin() {
  const { user } = useAuth();
  const router = useRouter();
  const checkUserProfile = () => {
    signIn();
    if (user.uid) {
      getUsersByUid(user.uid).then((userObj) => {
        if (!Object.values(userObj).length) {
          router.push('/user/new');
        } else router.push('/');
      });
    }
  };
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <button type="button" className="btn btn-primary btn-lg copy-btn" onClick={checkUserProfile}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
