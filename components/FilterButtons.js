import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Dropdown } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {
  getEthnicities, getGenders, getPronouns, getSexualOrientations,
} from '../api/demographicData';

function FilterButtons() {
  const [genders, setGenders] = useState([]);
  const [pronouns, setPronouns] = useState([]);
  const [ethnicities, setEthnicities] = useState([]);
  const [sexualOrientations, setSexualOrientations] = useState([]);

  useEffect(() => {
    getGenders().then(setGenders);
    getPronouns().then(setPronouns);
    getEthnicities().then(setEthnicities);
    getSexualOrientations().then(setSexualOrientations);
  }, []);

  const handleClick = (e) => {
    const { value, name } = e.target;
    console.warn(e.target, name, value);
  };

  return (
    <div className="filterButtons">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
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
        <Dropdown.Toggle variant="success" id="dropdown-basic">
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
        <Dropdown.Toggle variant="success" id="dropdown-basic">
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
        <Dropdown.Toggle variant="success" id="dropdown-basic">
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
    </div>
  );
}

export default FilterButtons;
