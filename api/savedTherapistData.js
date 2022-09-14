import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getSavedTherapists = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/savedTherapists.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const getSingleSavedTherapist = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/savedTherapists/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createSavedTherapist = (therapistObj, uid) => new Promise((resolve, reject) => {
  axios
    .post(`${dbUrl}/savedTherapists.json`, therapistObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/savedTherapists/${response.data.name}.json`, payload).then(() => {
        getSavedTherapists(uid).then((userArr) => resolve(userArr));
      });
    })
    .catch((error) => reject(error));
});

const removeSavedTherapist = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/savedTherapists/${firebaseKey}.json`).then(() => {
    getSavedTherapists().then(resolve);
  }).catch(reject);
});

const getSavedTherapistByTherapistId = (therapistId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/savedTherapists.json?orderBy="therapistId"&equalTo="${therapistId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getSavedTherapists, createSavedTherapist, removeSavedTherapist, getSingleSavedTherapist, getSavedTherapistByTherapistId,
};
