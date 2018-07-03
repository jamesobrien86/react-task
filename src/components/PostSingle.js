import React, { Component } from 'react';
import { getPostById } from '../services/http-service';

import Post from './Post';
import User from './User';

class PostSingle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            error: false,
         };
    }

    componentDidMount() {
        const postId = this.props.match.params.postId;
        getPostById(postId)
            .then(post => this.setState({post}))
            .catch(error => {
                console.log(error);
                this.setState({ error: true });
            });

    }


    render() {
        const { post } = this.state;
        const { error } = this.state;

        if (error) {
            return <h1>Sorry, could not load post</h1>;
        }

        if (!post) {
            return <h1>Loading...</h1>;
        }


        return (
            <div>
                <Post {...post} />
                <User {...post.user} />
            </div>
        );
    }
}

export default PostSingle;
