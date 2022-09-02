/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function User({ userObj }) {
  return (
    <div>
      <img src={userObj.photo} alt={userObj.name} />
      <h1>{userObj.name}</h1>
      <h5>{userObj.pronouns}</h5>
      <h2>{userObj.email}</h2>
      <h3>{userObj.phone}</h3>
    </div>
  );
}
User.propTypes = {
  userObj: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    pronouns: PropTypes.string,
  }),
};
User.defaultProps = {
  userObj: [],
};
export default User;
