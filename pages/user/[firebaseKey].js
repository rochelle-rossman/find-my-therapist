import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleUser } from '../../api/userData';

export default function ViewUser() {
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleUser(firebaseKey).then(setUserDetails);
  }, [firebaseKey]);
  return (
    <>
      <div>{userDetails.name}</div>
      <div>{userDetails.gender}</div>
    </>
  );
}
