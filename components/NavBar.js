/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getUsersByUid } from '../api/userData';
import { signIn, signOut } from '../utils/auth';

export default function NavBar() {
  const [member, setMember] = useState();
  const router = useRouter();
  const { user } = useAuth();

  const checkUserProfile = () => {
    if (user.uid) {
      getUsersByUid(user.uid).then((userObj) => {
        if (!Object.values(userObj).length) {
          router.push('/user/new');
        }
      });
    }
  };

  const signOutUser = () => {
    signOut();
    router.push('/');
  };

  useEffect(() => {
    getUsersByUid(user.uid).then((userArr) => {
      setMember(userArr[0]);
    });
    checkUserProfile();
  }, [user]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            Find My Therapist
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/blog/blogPosts">
                <a className="nav-link">Read Blog Posts</a>
              </Link>
            </li>
            <li className="nav-item">
              {member?.isTherapist ? (
                <Link passHref href="/blog/new">
                  <a className="nav-link">Create Blog Post</a>
                </Link>
              ) : <></>}
            </li>
            <li className="nav-item">
              {user ? (
                <Link passHref href="/savedTherapists/savedTherapists">
                  <a className="nav-link">My Saved Therapists</a>
                </Link>
              ) : <></>}
            </li>
            <li>
              {user ? (
                <Link passHref href="/profile">
                  <a className="nav-link">Profile</a>
                </Link>
              ) : (
                <></>
              )}
            </li>
            {user ? (
              <Link href="/" passHref>
                <Button type="button" className="btn btn-danger" onClick={signOutUser}>
                  Sign Out
                </Button>
              </Link>
            ) : (
              <Button type="button" className="btn btn-success" onClick={signIn}>
                Sign In
              </Button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
