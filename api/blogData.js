import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getBlogPosts = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/blogPosts.json`).then((response) => {
    if (response.data) {
      resolve(Object.values(response.data));
    } else {
      resolve([]);
    }
  }).catch((error) => reject(error));
});

const getSingleBlogPost = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/blogPosts/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getBlogPostsByTherapist = (uid) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/blogPosts.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createBlogPost = (blogObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/blogPosts.json`, blogObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/blogPosts/${response.data.name}.json`, payload)
        .then(resolve);
    }).catch(reject);
});

const updateBlogPost = (blogObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/blogPosts/${blogObj.firebaseKey}.json`, blogObj)
    .then(resolve)
    .catch(reject);
});

const deleteBlogPost = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/blogPosts/${firebaseKey}.json`)
    .then(() => {
      getBlogPosts().then(resolve);
    }).catch(reject);
});

export {
  getBlogPosts, getSingleBlogPost, getBlogPostsByTherapist, updateBlogPost, createBlogPost, deleteBlogPost,
};
