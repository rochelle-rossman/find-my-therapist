/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { getUsers, getUsersByUid } from '../api/userData';
import UserCard from '../components/UserCard';
import { useAuth } from '../utils/context/authContext';
import {
  getEthnicities, getGenders, getPronouns, getSexualOrientations,
} from '../api/demographicData';

function Home() {
  const router = useRouter();
  const [genders, setGenders] = useState([]);
  const [pronouns, setPronouns] = useState([]);
  const [ethnicities, setEthnicities] = useState([]);
  const [sexualOrientations, setSexualOrientations] = useState([]);
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const getAllUsers = () => {
    getUsers().then((userArr) => {
      setUsers(userArr);
    });
  };
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
    getAllUsers();
    getGenders().then(setGenders);
    getPronouns().then(setPronouns);
    getEthnicities().then(setEthnicities);
    getSexualOrientations().then(setSexualOrientations);
  }, [user]);

  const handleFilter = (params) => {
    let filteredUsers = users;
    Object.keys(params).forEach((param) => {
      filteredUsers = filteredUsers.filter((userObj) => userObj[param] === params[param]);
    });
    setUsers(filteredUsers);
  };

  return (
    <div className="container py-2">
      <div className="filterButtons">
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Gender
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {genders.map((gender) => (
              <Dropdown.Item key={gender.firebaseKey} onClick={() => handleFilter({ gender: gender.gender })} name="gender" value={gender.gender}>
                {gender.gender}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Pronouns
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {pronouns.map((pronoun) => (
              <Dropdown.Item key={pronoun.firebaseKey} value={pronoun.pronoun} onClick={() => handleFilter({ pronoun: pronoun.pronoun })} name="pronoun">
                {pronoun.pronoun}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Sexual Orientation
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {sexualOrientations.map((sexualOrientation) => (
              <Dropdown.Item key={sexualOrientation.firebaseKey} value={sexualOrientation.sexualOrientation} onClick={() => handleFilter({ sexualOrientation: sexualOrientation.sexualOrientation })} name="sexualOrientation">
                {sexualOrientation.sexualOrientation}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Race/Ethnicity
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {ethnicities.map((ethnicity) => (
              <Dropdown.Item key={ethnicity.firebaseKey} value={ethnicity.ethnicity} onClick={() => handleFilter({ ethnicity: ethnicity.ethnicity })} name="ethnicity">
                {ethnicity.ethnicity}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="light" onClick={() => getAllUsers()} value="clear">
          Clear Filters
        </Button>
      </div>
      <div className="therapistCards">{users.length > 0 ? users.filter((userObj) => userObj.isTherapist).map((userObj) => <UserCard key={userObj.firebaseKey} userObj={userObj} onUpdate={getAllUsers} />) : <h2 className="d-flex justify-content-center">Sorry, there are no therapists who match your search.</h2>}</div>
    </div>
  );
}

export default Home;
