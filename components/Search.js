import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

function Search({ blogs, setFilteredBlogs }) {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    const results = blogs.filter((blog) => blog.title.toLowerCase().includes(value.toLowerCase()) || blog.content.toLowerCase().includes(value.toLowerCase()));
    setFilteredBlogs(results);
  };

  return (
    <Form className="search">
      <Form.Control type="search" className="searchInput" placeholder="Search Blog Posts" value={searchInput} onChange={handleChange} />
    </Form>
  );
}

Search.propTypes = {
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
  setFilteredBlogs: PropTypes.func.isRequired,
};

export default Search;
