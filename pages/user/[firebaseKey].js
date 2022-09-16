/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { MdOutlineMail, MdOutlineStarPurple500 } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import { getSingleUser, getUsersByUid } from '../../api/userData';
import { useAuth } from '../../utils/context/authContext';
import { createSavedTherapist, getSavedTherapistByTherapistId, removeSavedTherapist } from '../../api/savedTherapistData';
import { getBlogPostsByTherapist } from '../../api/blogData';
import BlogPostCard from '../../components/BlogPostCard';

export default function ViewUser() {
  const [savedTherapists, setSavedTherapists] = useState({});
  const [therapistsBlogs, setTherapistsBlogs] = useState([]);
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

  const addToUserSavedTherapists = () => {
    const payload = {
      name: userDetails.name,
      uid: user.uid,
      photo: userDetails.photo,
      pronouns: userDetails.pronouns,
      bio: userDetails.bio,
      email: userDetails.email,
      gender: userDetails.gender,
      phone: userDetails.phone,
      sexualOrientation: userDetails.sexualOrientation,
      ethnicity: userDetails.ethnicity,
      therapistId: userDetails.firebaseKey,
    };
    getSingleUser(userDetails.firebaseKey).then(() => {
      createSavedTherapist(payload);
    });
  };

  const removeFromUsersSavedTherapists = () => {
    removeSavedTherapist(savedTherapists.firebaseKey).then(setSavedTherapists);
  };

  useEffect(() => {
    getSingleUser(firebaseKey).then(setUserDetails);
    getBlogPostsByTherapist(userDetails.uid).then(setTherapistsBlogs);
    getSavedTherapistByTherapistId(userDetails.firebaseKey).then((therapistArr) => {
      setSavedTherapists(therapistArr[0]);
    });
    checkUserProfile();
  }, [userDetails]);
  return (
    <>
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
                {savedTherapists?.therapistId === userDetails?.firebaseKey ? <MdOutlineStarPurple500 /> : <></>}
              </div>
              <div className="postcard__bar" />
              <div>{userDetails?.bio}</div>
              <ul className="postcard__tagbox">
                {user ? (
                  <>
                    <li className={userDetails.uid === user.uid || savedTherapists?.therapistId === userDetails?.firebaseKey ? 'noShow' : 'tag__item'}>
                      <Button variant="link" onClick={addToUserSavedTherapists}>
                        SAVE
                      </Button>
                    </li>
                    {savedTherapists?.therapistId === userDetails?.firebaseKey ? (
                      <li className="tag__item">
                        <Button variant="link" onClick={removeFromUsersSavedTherapists}>REMOVE FROM SAVED</Button>
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
      <div className="d-flex flex-wrap">
        {therapistsBlogs ? <h4 className="pageHeader">Blog Posts Written by {userDetails.name}</h4> : <></>}
        {therapistsBlogs.map((blog) => (
          <BlogPostCard key={blog.firebaseKey} blogObj={blog} onUpdate={setTherapistsBlogs} className="blogCard" />
        ))}
      </div>
    </>
  );
}
