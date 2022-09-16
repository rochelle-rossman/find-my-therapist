import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createBlogPost, updateBlogPost } from '../api/blogData';

const initialState = {
  title: '',
  photo: '',
  content: '',
};

function BlogForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
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
      updateBlogPost(formInput).then(() => router.push('/blog/blogPosts'));
    } else {
      const payload = { ...formInput, timeStamp: new Date().toLocaleString(), uid: user.uid };
      createBlogPost(payload).then(() => {
        router.push('/blog/blogPosts');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Blog Post</h2>
      <FloatingLabel controlId="floatingInput1" label="Title" className="mb-3">
        <Form.Control type="text" placeholder="Title" name="title" value={formInput.title} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput1" label="Photo URL" className="mb-3">
        <Form.Control type="text" placeholder="Photo URL" name="photo" value={formInput.photo} onChange={handleChange} required />
      </FloatingLabel>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={12} placeholder="Content" name="content" value={formInput.content} onChange={handleChange} required />
      </Form.Group>
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Add'} Blog Post</Button>
    </Form>
  );
}

BlogForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    firebaseKey: PropTypes.string,
    photo: PropTypes.string,
    uid: PropTypes.string,
  }),
};

BlogForm.defaultProps = {
  obj: initialState,
};

export default BlogForm;
