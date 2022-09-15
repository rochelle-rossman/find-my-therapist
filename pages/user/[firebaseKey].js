/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
// import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdOutlineMail } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import { getSingleUser, getUsersByUid } from '../../api/userData';
import { useAuth } from '../../utils/context/authContext';

export default function ViewUser() {
  const { user } = useAuth();
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  const checkUserProfile = () => {
    if (user.uid) {
      getUsersByUid(user.uid).then((userObj) => {
        if (!Object.values(userObj).length) {
          router.push('/');
        }
      });
    }
  };

  useEffect(() => {
    checkUserProfile();
    getSingleUser(firebaseKey).then(setUserDetails);
  }, []);
  return (
    <section className="light">
      <div className="container py-2">
        <article className="postcard light blue">
          <a className="postcard__img_link" href={`/savedTherapists/${userDetails?.firebaseKey}`} passhref="true">
            <img className="postcard__img" src={userDetails?.photo} alt={userDetails?.name} />
          </a>
          <div className="postcard__text t-dark">
            <h2 className="postcard__title blue">
              <a href={`/savedTherapists/${userDetails?.firebaseKey}`}>{userDetails?.name}</a>
            </h2>
            <div className="postcard__subtitle small">
              <h5>{userDetails?.pronouns}</h5>
              <h6>
                <MdOutlineMail /> <a href={`mailto:${userDetails.email}`}>{userDetails?.email}</a>
              </h6>
              <h6>
                <HiOutlinePhone /> <a href={`tel:${userDetails.phone}`}>{userDetails?.phone}</a>
              </h6>
            </div>
            <div className="postcard__bar" />
            <div>{userDetails?.bio}</div>
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
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
