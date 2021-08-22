import React from "react";
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteSweepIcon />
      </button>
    </div>
  );
}

export default Note;
