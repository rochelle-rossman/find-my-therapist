/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { getUsersByUid } from '../api/userData';
import { signIn, signOut } from '../utils/auth';

export default function NavBar() {
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
    checkUserProfile();
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark .me-auto .ml-auto">
      <div className="container-fluid">
        <Link passHref href="/">
          <a className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01">
            <img className="navbarLogo" src="https://cdn.dribbble.com/users/2418354/screenshots/15562590/media/cb965f2f584d39f2e42a289bb3d0f726.gif" alt="find my therapist" />
            Find My Therapist
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

          <Link passHref href="/">
            <a className="nav-link">Home</a>
          </Link>

          <Link passHref href="/blog/blogPosts">
            <a className="nav-link">Blog</a>
          </Link>

          {user ? (
            <Link passHref href="/savedTherapists">
              <a className="nav-link">Saved Therapists</a>
            </Link>
          ) : (
            <></>
          )}

          {user ? (
            <Link passHref href="/profile">
              <a className="nav-link">Profile</a>
            </Link>
          ) : (
            <></>
          )}

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
        </div>
      </div>
    </nav>
  );
}
