import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getPosts } from '../services/http-service';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    getPosts().then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;

    if (!Array.isArray(posts) || posts.length === 0) {
      return <h1>Loading...</h1>
    }

    return this.state.posts.map(post => (
      <Link to={`/posts/${post.id}`} key={post.id}>
        <div className="Card" >
          <h1 className="post-title">
            {post.title}
          </h1>
          <div className="card-block">
            <h4 className="user-name">{post.user}</h4>
            <p className="card-text">{post.body}</p>
          
          </div>
        </div>
      </Link>
    ));
  }
}

export default PostList;
