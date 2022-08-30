import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { getSingleUser } from '../../../api/userData';
import UserForm from '../../../components/UserForm';

export default function EditUser() {
  const [editUserObj, setEditUserObj] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleUser(firebaseKey).then(setEditUserObj);
  }, [firebaseKey]);

  return <UserForm obj={editUserObj} />;
}
