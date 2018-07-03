import React, { Component } from 'react';
import Comment from './Comment';


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
              <button onClick={this.toggleComments.bind(this)}>
                  {this.state.showComments ? "Hide Comments" : "Show Comments"}
              </button>

              {this.state.showComments
                  ? comments.map(comment => <Comment {...comment} key={comment.id} />)
                  : null
              }
          </div>
        );
    }
}

export default CommentList;