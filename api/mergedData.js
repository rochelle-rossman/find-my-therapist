import { getSingleGender } from './demographicData';
import { getSingleUser } from './userData';

const viewUserDetails = (userFirebaseKey) => new Promise((resolve, reject) => {
  getSingleUser(userFirebaseKey).then((userObject) => {
    getSingleGender(userObject.genderId)
      .then((genderObject) => {
        resolve({ genderObject, ...userObject });
      });
  }).catch((error) => reject(error));
});

export default viewUserDetails;
