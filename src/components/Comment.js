import React from 'react';

const Comment = ({name , email , body}) => (
    <div className="card-block">
      <p className="user">{name}</p>
      <p className="email">{email}</p>
      <p className="phone">{body}</p>
    </div>
  );

  export default Comment