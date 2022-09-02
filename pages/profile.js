import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';
import { getUsersByUid, deleteUser } from '../api/userData';

export default function Profile() {
  const [member, setMember] = useState([]);
  const { user } = useAuth();
  const router = useRouter();
  const deleteThisUser = () => {
    if (window.confirm(`Delete ${member.name}?`)) {
      deleteUser(member.firebaseKey).then(() => router.push('/'));
    }
  };

  useEffect(() => {
    getUsersByUid(user.uid).then(setMember);
  }, [user]);

  return (
    <div className="profile">
      {member?.map((memberProfile) => (
        <>
          <User userObj={memberProfile} />
          <Link passHref href={`/user/edit/${memberProfile.firebaseKey}`}>
            <Button type="button" className={memberProfile.uid !== user.uid ? 'noShow' : ''} variant="outline-success">
              Edit Profile
            </Button>
          </Link>
          <Button type="button" className={memberProfile.uid !== user.uid ? 'noShow' : ''} variant="outline-danger" onClick={signOut}>
            Sign Out
          </Button>
          <Button type="button" className={memberProfile.uid !== user.uid ? 'noShow' : ''} variant="outline-danger" onClick={deleteThisUser}>
            Delete Profile
          </Button>
        </>
      ))}
    </div>
  );
}
