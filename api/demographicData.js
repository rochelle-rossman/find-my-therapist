import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getGenders = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/genders.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleGender = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/genders.json?orderBy="firebaseKey"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getSexualOrientations = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/sexualOrientations.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getPronouns = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/pronouns.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getEthnicities = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/ethnicities.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

export {
  getEthnicities, getGenders, getPronouns, getSexualOrientations, getSingleGender,
};
