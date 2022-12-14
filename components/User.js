/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { HiOutlinePhone } from 'react-icons/hi';
import PropTypes from 'prop-types';

function User({ userObj }) {
  return (
    <section>
      <div className="container py-2">
        <article className="postcard light blue">
          <img className="postcard__img" src={userObj.photo} alt={userObj.name} />
          <div className="postcard__text t-dark">
            <h2 className="postcard__title blue">{userObj.name}</h2>
            <div className="postcard__subtitle small">
              <h5>{userObj.pronouns}</h5>
              <h6>
                <MdOutlineEmail /> {userObj.email}
              </h6>
              <h6><HiOutlinePhone /> {userObj.phone}</h6>
            </div>
            <div className="postcard__bar" />
            <div>{userObj.bio}</div>
          </div>
        </article>
      </div>
    </section>
  );
}
User.propTypes = {
  userObj: PropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    pronouns: PropTypes.string,
    bio: PropTypes.string,
  }),
};
User.defaultProps = {
  userObj: [],
};
export default User;
