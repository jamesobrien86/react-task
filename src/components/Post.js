import React from 'react';
import { Col } from 'react-bootstrap';


const Post = ({title, user, body}) => (
    <Col xs={12} md={12}>
        <h1> Post Details </h1>
        <div className="Card single-post">
            <h1 className="post-title">
                {title}
            </h1>
            <div className="card-block">
                <h4 className="user-name">{user.name}</h4>
                <p className="card-text">{body}</p>
            </div>
        </div>
    </Col>
);

export default Post;
