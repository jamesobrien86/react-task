import React from 'react';

const Post = ({title, user, body}) => (
    <div className="Card" >
        <h1 className="post-title">
            {title}
        </h1>
        <div className="card-block">
            <h4 className="user-name">{user.name}</h4>
            <p className="card-text">{body}</p>
        </div>
    </div>
);

export default Post;
