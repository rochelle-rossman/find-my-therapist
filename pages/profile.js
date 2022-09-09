import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import User from '../components/User';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';
import { getUsersByUid } from '../api/userData';

export default function Profile() {
  const [member, setMember] = useState({});
  const { user } = useAuth();
  const router = useRouter();
  const logout = () => {
    signOut();
    router.push('/login');
  };

  useEffect(() => {
    getUsersByUid(user.uid).then((response) => {
      setMember(response[0]);
    });
  }, [user]);

  return (
    <div className="profile">
      {member?.firebaseKey ? (
        <>
          <User userObj={member} />
          <Link passHref href={`/user/edit/${member.firebaseKey}`}>
            <Button type="button" className={member.uid !== user.uid ? 'noShow' : ''} variant="outline-success">
              Edit Profile
            </Button>
          </Link>
          <Button type="button" className={member.uid !== user.uid ? 'noShow' : ''} variant="outline-danger" onClick={logout}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Link passHref href="/user/new">
            <Button type="button" variant="outline-success">
              Create Profile
            </Button>
          </Link>
          <Button type="button" variant="outline-danger" onClick={logout}>
            Sign Out
          </Button>
        </>
      )}
    </div>
  );
}
