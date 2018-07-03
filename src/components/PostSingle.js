import React, { Component } from 'react';
import { getPostById } from '../services/http-service';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import User from './User'
import Post from './Post'
import CommentList from './CommentList'

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
                <Link className="btn btn-danger" to={`/posts/`}>Back</Link>
                <Row>
                    <Post {...post} />
                </Row>
                <Row>
                    <User {...post.user} />
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <CommentList comments={post.comments} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PostSingle;
