import Link from 'next/link';
import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
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
      <Link href="/user/new" passHref>
        <button type="button" className="btn btn-primary btn-lg copy-btn" onClick={signIn}>
          Sign In
        </button>
      </Link>
    </div>
  );
}

export default Signin;
