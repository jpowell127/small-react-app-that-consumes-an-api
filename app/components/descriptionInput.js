import React from 'react';

const CommentInput = (props) => {
  return (
    <div className="control is-grouped" style={{padding:"1em"}}>
      <p className="control is-expanded">
        <input className="input" id="description" type="text" placeholder="Add A Description" onChange={props.updateDescription} />
      </p>
      <p className="control">
        <a className="button is-success" onClick={props.addDescription}>
          Add
        </a>
      </p>
    </div>
  );
};

export default CommentInput;
