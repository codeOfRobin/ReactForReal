import React from 'react';


function SaveButton({ onClick }) {
    return (
      <button className="pv2 ph3" onClick={onClick}>
        Save
      </button>
    );
  }

  export default SaveButton;