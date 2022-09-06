/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {
  getUsers, getUsersByEthnicity, getUsersByGender, getUsersByPronouns, getUsersBySexualOrientation,
} from '../api/userData';
import UserCard from '../components/UserCard';
import { useAuth } from '../utils/context/authContext';
import {
  getEthnicities, getGenders, getPronouns, getSexualOrientations,
} from '../api/demographicData';

function Home() {
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

  useEffect(() => {
    getAllUsers();
    getGenders().then(setGenders);
    getPronouns().then(setPronouns);
    getEthnicities().then(setEthnicities);
    getSexualOrientations().then(setSexualOrientations);
  }, [user]);

  const handleClick = (e) => {
    const { text } = e.target;
    if (e.target.value === 'clear') {
      getAllUsers(setUsers);
    } else if (e.target.text === 'Man') {
      getUsersByGender(text).then(setUsers);
    } else if (e.target.text === 'Woman') {
      getUsersByGender(text).then(setUsers);
    } else if (e.target.text === 'Non-binary/non-conforming') {
      getUsersByGender(text).then(setUsers);
    } else if (e.target.text === 'Transfeminine') {
      getUsersByGender(text).then(setUsers);
    } else if (e.target.text === 'Transmasculine') {
      getUsersByGender(text).then(setUsers);
    } else if (e.target.text === 'she/her') {
      getUsersByPronouns(text).then(setUsers);
    } else if (e.target.text === 'they/them') {
      getUsersByPronouns(text).then(setUsers);
    } else if (e.target.text === 'he/him') {
      getUsersByPronouns(text).then(setUsers);
    } else if (e.target.text === 'Queer') {
      getUsersBySexualOrientation(text).then(setUsers);
    } else if (e.target.text === 'Pansexual') {
      getUsersBySexualOrientation(text).then(setUsers);
    } else if (e.target.text === 'Straight') {
      getUsersBySexualOrientation(text).then(setUsers);
    } else if (e.target.text === 'Gay') {
      getUsersBySexualOrientation(text).then(setUsers);
    } else if (e.target.text === 'Bisexual') {
      getUsersBySexualOrientation(text).then(setUsers);
    } else if (e.target.text === 'Lesbian') {
      getUsersBySexualOrientation(text).then(setUsers);
    } else if (e.target.text === 'Questioning') {
      getUsersBySexualOrientation(text).then(setUsers);
    } else if (e.target.text === 'Asexual') {
      getUsersBySexualOrientation(text).then(setUsers);
    } else if (e.target.text === 'White') {
      getUsersByEthnicity(text).then(setUsers);
    } else if (e.target.text === 'Black or African American') {
      getUsersByEthnicity(text).then(setUsers);
    } else if (e.target.text === 'Asian') {
      getUsersByEthnicity(text).then(setUsers);
    } else if (e.target.text === 'Native Hawaiian or Other Pacific Islander') {
      getUsersByEthnicity(text).then(setUsers);
    } else if (e.target.text === 'Other') {
      getUsersByEthnicity(text).then(setUsers);
    } else if (e.target.text === 'American Indian or Alaskan Native') {
      getUsersByEthnicity(text).then(setUsers);
    } else if (e.target.text === 'Hispanic, Latino/a/x, or of Spanish origin') {
      getUsersByEthnicity(text).then(setUsers);
    }
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
              <Dropdown.Item key={gender.firebaseKey} onClick={handleClick} name="gender" value={gender.gender}>
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
              <DropdownItem key={pronoun.firebaseKey} value={pronoun.pronoun} onClick={handleClick} name="pronoun">
                {pronoun.pronoun}
              </DropdownItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Sexual Orientation
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {sexualOrientations.map((sexualOrientation) => (
              <DropdownItem key={sexualOrientation.firebaseKey} value={sexualOrientation.sexualOrientation} onClick={handleClick} name="sexualOrientation">
                {sexualOrientation.sexualOrientation}
              </DropdownItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Race/Ethnicity
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {ethnicities.map((ethnicity) => (
              <DropdownItem key={ethnicity.firebaseKey} value={ethnicity.ethnicity} onClick={handleClick} name="ethnicity">
                {ethnicity.ethnicity}
              </DropdownItem>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="light" onClick={handleClick} value="clear">Clear Filters</Button>
      </div>
      <div className="therapistCards">
        {users.map((client) => (
          <UserCard key={client.firebaseKey} userObj={client} onUpdate={getAllUsers} />
        ))}
      </div>
    </div>
  );
}

export default Home;
