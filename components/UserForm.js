import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import {
  getEthnicities, getGenders, getPronouns, getSexualOrientations,
} from '../api/demographicData';
import { createUser, updateUser } from '../api/userData';
import { useAuth } from '../utils/context/authContext';

const initialState = {
  name: '',
  phone: '',
  email: '',
  isTherapist: false,
  bio: '',
};

export default function UserForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [genders, setGenders] = useState([]);
  const [pronouns, setPronouns] = useState([]);
  const [ethnicities, setEthnicities] = useState([]);
  const [sexualOrientations, setSexualOrientations] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    getGenders().then(setGenders);
    getPronouns().then(setPronouns);
    getEthnicities().then(setEthnicities);
    getSexualOrientations().then(setSexualOrientations);
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateUser(formInput).then(() => router.push(`/user/${obj.firebaseKey}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createUser(payload).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} User</h2>
      <FloatingLabel controlId="floatingInput1" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter Name" name="name" value={formInput.name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Date of Birth" className="mb-3">
        <Form.Control type="date" placeholder="Enter Date of Birth" name="dateOfBirth" value={formInput.dateOfBirth} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="Enter email address" name="email" value={formInput.email} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Phone" className="mb-3">
        <Form.Control type="text" placeholder="Enter phone number" name="phone" value={formInput.phone} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Photo URL" className="mb-3">
        <Form.Control type="text" placeholder="Enter a photo URL" name="photo" value={formInput.photo} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Gender">
        <Form.Select aria-label="Gender" name="gender" onChange={handleChange} className="mb-3" required>
          <option value="">Select Gender Identity</option>
          {genders.map((gender) => (
            <option key={gender.firebaseKey} value={gender.gender} selected={obj.gender === gender.gender}>
              {gender.gender}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Pronouns">
        <Form.Select aria-label="Pronouns" name="pronouns" onChange={handleChange} className="mb-3" required>
          <option value="">Select Preferred Pronouns</option>
          {pronouns.map((pronoun) => (
            <option key={pronoun.firebaseKey} value={pronoun.pronoun} selected={obj.pronouns === pronoun.pronoun}>
              {pronoun.pronoun}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Sexual Orientation">
        <Form.Select aria-label="Sexual Orientation" name="sexualOrientation" onChange={handleChange} className="mb-3" required>
          <option value="">Select Sexual Orientation</option>
          {sexualOrientations.map((sexualOrientation) => (
            <option key={sexualOrientation.firebaseKey} value={sexualOrientation.sexualOrientation} selected={obj.sexualOrientation === sexualOrientation.sexualOrientation}>
              {sexualOrientation.sexualOrientation}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Race/Ethnicity">
        <Form.Select aria-label="Ethnicity" name="ethnicity" onChange={handleChange} className="mb-3" required>
          <option value="">Select Race/Ethnicity</option>
          {ethnicities.map((ethnicity) => (
            <option key={ethnicity.firebaseKey} value={ethnicity.ethnicity} selected={obj.ethnicity === ethnicity.ethnicity}>
              {ethnicity.ethnicity}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={12} placeholder="Bio" name="bio" value={formInput.bio} onChange={handleChange} />
      </Form.Group>
      <Form.Check
        type="switch"
        id="therapist"
        label="Therapist"
        checked={formInput.isTherapist}
        onChange={(e) => setFormInput((prevState) => ({
          ...prevState,
          isTherapist: e.target.checked,
        }))}
      />
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Add'} User</Button>
    </Form>
  );
}

UserForm.propTypes = {
  obj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    gender: PropTypes.string,
    pronouns: PropTypes.string,
    ethnicity: PropTypes.string,
    sexualOrientation: PropTypes.string,
    isTherapist: PropTypes.bool,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    photo: PropTypes.string,
    dateOfBirth: PropTypes.string,
    bio: PropTypes.string,
  }),
};

UserForm.defaultProps = {
  obj: initialState,
};
