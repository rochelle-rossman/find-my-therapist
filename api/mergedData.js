import { getSingleGender, getSingleSexualOrientation } from './demographicData';
import { getSingleUser } from './userData';

const viewUserDetails = (userFirebaseKey) => new Promise((resolve, reject) => {
  getSingleUser(userFirebaseKey)
    .then((userObj) => (Promise.all([getSingleGender(userObj.genderId), getSingleSexualOrientation(userObj.sexualOrientation)])
      .then(([gender, sexualOrientation]) => {
        resolve({ ...userObj, gender, sexualOrientation });
      }))).catch((error) => reject(error));
});

export default viewUserDetails;
