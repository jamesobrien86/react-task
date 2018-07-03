import React from 'react'
import PropTypes from 'prop-types';

const User = ({ name, username, email, phone }) => (
    <div className="Card user">
        <div className="card-block">
            <p className="user">{name}</p>
            <p className="username">{username}</p>
            <p className="email">{email}</p>
            <p className="phone">{phone}</p>
        </div>
    </div>
);

User.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
};

export default User;
