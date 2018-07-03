import React, { Component } from 'react';
import Comment from './Comment';
import { Button, ListGroup } from 'react-bootstrap';



class CommentList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showComments:false
         };

    }

    toggleComments() {
        this.setState({
            showComments:!this.state.showComments
        })
    }

    render() {
        const { comments = [] } = this.props;

        return (
    
          <div className="Card comments">
              <h1>Comments</h1>
              <Button bsStyle="danger" onClick={this.toggleComments.bind(this)}>
                  {this.state.showComments ? "Hide Comments" : "Show Comments"}
              </Button>

              {this.state.showComments
                  ? comments.map(comment => <ListGroup key={comment.id}> <Comment {...comment} key={comment.id} /></ListGroup>)
                  : null
              }
          </div>
        );
    }
}

export default CommentList;