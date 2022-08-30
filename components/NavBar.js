/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();
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
              <Link passHref href="/blog/new">
                <a className="nav-link">Create Blog Post</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link">My Saved Therapists</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link passHref href="/">
                <a className="nav-link">Messages</a>
              </Link>
            </li>
            <button type="button" className="btn btn-danger" onClick={signOut}>
              Sign Out
            </button>
            <Link passHref href="/profile">
              <img className="userIcon" src={user.photoURL} alt={user.displayName} />
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
