import React from 'react'
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const User = ({ name, username, email, phone }) => (
     <Col xs={12} md={12}>
        <h1> Post Author </h1>
        <div className="Card user">
            <div className="card-block">
                <p className="user">User : {name}</p>
                <p className="username">Username : {username}</p>
                <p className="email">Email : {email}</p>
                <p className="phone">Phone : {phone}</p>
            </div>
        </div>
    </Col>
);

User.propTypes = {
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string,
};

export default User;
