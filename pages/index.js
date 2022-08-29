import { useEffect, useState } from 'react';
import { getUsers } from '../api/userData';
import UserCard from '../components/UserCard';
// import { useAuth } from '../utils/context/authContext';

function Home() {
  // const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const getAllUsers = () => {
    getUsers().then((userArr) => {
      setUsers(userArr);
    });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {users.map((client) => (
        <UserCard key={client.firebaseKey} userObj={client} />
      ))}
    </div>
  );
}

export default Home;
