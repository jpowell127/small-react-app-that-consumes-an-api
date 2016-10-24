import React from 'react';

const Comment= (props) => {
  return (
    <div className="card-content">
      <div className="content">
        {props.description ? <h4 className="title is-4">Description</h4> : null}
        {props.description}
      </div>
    </div>
  );
};

export default Comment;
