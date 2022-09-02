import { getSingleBlogPost } from './blogData';
import { getSingleUser } from './userData';

const viewBlogDetails = (blogFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBlogPost(blogFirebaseKey)
    .then((blogObject) => {
      getSingleUser(blogObject.therapistId)
        .then((userObject) => {
          resolve({ userObject, ...blogObject });
        });
    }).catch((error) => reject(error));
});

export default viewBlogDetails;
