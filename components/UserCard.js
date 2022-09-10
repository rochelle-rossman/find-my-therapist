/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { deleteUser, getUsersByUid } from '../api/userData';

function UserCard({ userObj, onUpdate }) {
  const router = useRouter();
  const { user } = useAuth();
  const deleteThisUser = () => {
    deleteUser(userObj.firebaseKey).then(() => onUpdate());
  };
  const checkUserProfile = () => {
    if (user.uid) {
      getUsersByUid(user.uid).then((userObject) => {
        if (!Object.values(userObject).length) {
          router.push('/user/new');
        } else router.push('/');
      });
    }
  };

  useEffect(() => {
    checkUserProfile();
  }, []);

  return (
    <section className="light">
      <div className="container py-2">
        <article className="postcard light blue">
          <a className="postcard__img_link" href={`/user/${userObj.firebaseKey}`} passHref>
            <img className="postcard__img" src={userObj.photo} alt={userObj.name} />
          </a>
          <div className="postcard__text t-dark">
            <h2 className="postcard__title blue">
              <a href={`/user/${userObj.firebaseKey}`}>{userObj.name}</a>
            </h2>
            <div className="postcard__subtitle small">
              <h5>{userObj.pronouns}</h5>
              <h6>
                {userObj.email}
              </h6>
            </div>
            <div className="postcard__bar" />
            <div className="contentPreview">{userObj.bio}</div>
            <ul className="postcard__tagbox">
              {user ? (
                <>
                  <li className="tag__item">
                    <Button variant="link">SAVE</Button>
                  </li>
                  <li className="tag__item">
                    <Button variant="link">MESSAGE</Button>
                  </li>
                </>
              ) : <></>}
              <li className={userObj.uid !== user.uid ? 'noShow' : 'tag__item'}>
                <Button variant="link" onClick={deleteThisUser}>DELETE</Button>
              </li>
              <li className={userObj.uid !== user.uid ? 'noShow' : 'tag__item'}>
                <Link href={`/user/edit/${userObj.firebaseKey}`} passHref>
                  <Button variant="link">EDIT</Button>
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
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
  onUpdate: PropTypes.func.isRequired,
};

export default UserCard;
