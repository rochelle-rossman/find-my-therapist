/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getUsersByUid } from '../../api/userData';
import BlogForm from '../../components/BlogForm';
import { useAuth } from '../../utils/context/authContext';

export default function CreateBlog() {
  const [member, setMember] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getUsersByUid(user.uid).then((userArr) => {
      setMember(userArr[0]);
    });
  }, []);

  return (
    <>
      {member.isTherapist ? <BlogForm /> : <></>}
      {/* <h2 className="pageHeader">Join our therapist community to share your thoughts and experiences.</h2> */}
    </>
  );
}
