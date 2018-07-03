import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const Comment = ({name , email , body}) => (
	<ListGroupItem>
		<div className="card-block">
			<p className="user">{name}</p>
			<p className="email">{email}</p>
			<p className="phone">{body}</p>
		</div>
	</ListGroupItem>
);

Comment.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};


export default Comment