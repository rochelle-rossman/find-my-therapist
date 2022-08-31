import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import viewUserDetails from '../../api/mergedData';

export default function ViewUser() {
  const [userDetails, setUserDetails] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewUserDetails(firebaseKey).then(setUserDetails);
  }, [firebaseKey]);
  return (
    <>
      <div>{userDetails.name}</div>
      <div>{userDetails.genderObject?.gender}</div>
    </>
  );
}
