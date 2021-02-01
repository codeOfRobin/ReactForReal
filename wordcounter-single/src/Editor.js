import React from "react";

function Editor({ text, onTextChange }) {
  function handleTextChange(event) {
    onTextChange(event.target.value);
  }
  return (
    <div className="flex flex-column mv2">
      <label htmlFor="editor" className="mv2">
        Enter your text
      </label>
      <textarea value={text} id="editor" onChange={handleTextChange} />
    </div>
  );
}

export default Editor;
