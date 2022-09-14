import { getSingleBlogPost } from './blogData';
import { getUsersByUid } from './userData';

const viewBlogDetails = (blogFirebaseKey) => new Promise((resolve, reject) => {
  getSingleBlogPost(blogFirebaseKey)
    .then((blogObject) => {
      getUsersByUid(blogObject.uid)
        .then((userObject) => {
          resolve({ author: userObject[0], ...blogObject });
        });
    }).catch((error) => reject(error));
});

export default viewBlogDetails;
