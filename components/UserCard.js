/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { MdOutlineEmail, MdOutlineStarPurple500 } from 'react-icons/md';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HiOutlinePhone } from 'react-icons/hi';
import { useAuth } from '../utils/context/authContext';
import { getSingleUser, getUsersByUid } from '../api/userData';
import { createSavedTherapist, getSavedTherapistByTherapistId, removeSavedTherapist } from '../api/savedTherapistData';

function UserCard({ userObj, onUpdate }) {
  const [savedTherapists, setSavedTherapists] = useState({});
  const router = useRouter();
  const { user } = useAuth();
  const deleteThisTherapist = () => {
    if (window.confirm(`Remove ${savedTherapists?.name} from your saved therapists?`)) {
      removeSavedTherapist(savedTherapists?.firebaseKey).then(() => onUpdate());
    }
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

  const addToUserSavedTherapists = () => {
    const payload = {
      name: userObj.name,
      uid: user.uid,
      photo: userObj.photo,
      pronouns: userObj.pronouns,
      bio: userObj.bio,
      email: userObj.email,
      gender: userObj.gender,
      phone: userObj.phone,
      sexualOrientation: userObj.sexualOrientation,
      ethnicity: userObj.ethnicity,
      therapistId: userObj.firebaseKey,
    };
    getSingleUser(userObj.firebaseKey).then(() => {
      createSavedTherapist(payload);
    });
  };

  useEffect(() => {
    checkUserProfile();
    getSavedTherapistByTherapistId(userObj.firebaseKey).then((therapistArr) => {
      setSavedTherapists(therapistArr[0]);
    });
  }, [userObj]);

  return (
    <section className="light">
      <div className="container py-2">
        <article className="postcard light blue">
          <a className="postcard__img_link" href={`/user/${userObj.firebaseKey}`} passhref="true">
            <img className="postcard__img" src={userObj.photo} alt={userObj.name} />
          </a>
          <div className="postcard__text t-dark">
            <h2 className="postcard__title blue">
              <a href={`/user/${userObj.firebaseKey}`}>{userObj.name}</a>
            </h2>
            <div className="postcard__subtitle small">
              <h5>{userObj.pronouns}</h5>
              <h6>
                <MdOutlineEmail /> <a href={`mailto:${userObj.email}`}>{userObj.email}</a>
              </h6>
              <h6>
                <HiOutlinePhone /> <a href={`tel:${userObj.phone}`}>{userObj.phone}</a>
              </h6>
              {savedTherapists?.therapistId === userObj?.firebaseKey ? <MdOutlineStarPurple500 /> : <></>}
            </div>
            <div className="postcard__bar" />
            <div className="contentPreview">{userObj.bio}</div>
            <ul className="postcard__tagbox">
              {user ? (
                <>
                  <li className={userObj.uid === user.uid || savedTherapists?.therapistId === userObj?.firebaseKey ? 'noShow' : 'tag__item'}>
                    <Link href="/savedTherapists/savedTherapists" passHref>
                      <Button variant="link" onClick={addToUserSavedTherapists}>
                        ADD TO SAVED
                      </Button>
                    </Link>
                  </li>
                  {savedTherapists?.therapistId === userObj?.firebaseKey ? (
                    <li className="tag__item">
                      <Button variant="link" onClick={deleteThisTherapist}>
                        REMOVE FROM SAVED
                      </Button>
                    </li>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <></>
              )}
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
    gender: PropTypes.string,
    ethnicity: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default UserCard;
