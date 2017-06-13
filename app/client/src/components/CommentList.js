import React from "react";

import CommentItem from "./CommentItem";
import "../assets/styles/CommentList.css";

export default class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };
  }

  handleToggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { comments, currentUser, onDeleteComment } = this.props;
    const { expanded } = this.state;

    let commentsOnDisplay;
    if (expanded) {
      commentsOnDisplay = comments;
    } else {
      commentsOnDisplay = comments.slice(0, 4);
    }

    return (
      <div>
        <ul className="comment-list">
          {commentsOnDisplay.map(comment => {
            return (
              <CommentItem
                key={comment._uid_}
                comment={comment}
                currentUser={currentUser}
                onDeleteComment={onDeleteComment}
              />
            );
          })}
        </ul>

        <a
          href="#toggle-expand"
          onClick={e => {
            e.preventDefault();
            this.handleToggleExpanded();
          }}
        >
          {expanded
            ? <span>Collapse comments</span>
            : <span>Show all {comments.length} comments</span>}
        </a>
      </div>
    );
  }
}
