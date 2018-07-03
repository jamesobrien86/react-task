import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({name , email , body}) => (
    <div className="card-block">
      <p className="user">{name}</p>
      <p className="email">{email}</p>
      <p className="phone">{body}</p>
    </div>
  );

  Comment.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};


  export default Comment