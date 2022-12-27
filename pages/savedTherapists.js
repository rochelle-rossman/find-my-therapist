/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSavedTherapists } from '../api/savedTherapistData';
import SavedTherapistCard from '../components/SavedTherapistCard';
import { useAuth } from '../utils/context/authContext';
import { getUsersByUid } from '../api/userData';

export default function SavedTherapists() {
  const { user } = useAuth();
  const [therapists, setTherapists] = useState([]);
  const router = useRouter();

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
    getSavedTherapists(user.uid).then((therapistArr) => {
      setTherapists(therapistArr);
    }, []);
  }, []);

  return (
    <div>
      <h2 className="pageHeader">YOUR SAVED THERAPISTS</h2>
      {therapists.map((therapist) => (
        <SavedTherapistCard therapistObj={therapist} onUpdate={getSavedTherapists} key={therapist.firebaseKey} />
      ))}
    </div>
  );
}
