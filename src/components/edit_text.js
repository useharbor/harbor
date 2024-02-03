import React, { useState } from 'react';

const EditableTextBox = ({ initialText }) => {
  const [text, setText] = useState(initialText);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label htmlFor="editableInput">Edit me:</label>
      <input
        type="text"
        id="editableInput"
        value={text}
        onChange={handleTextChange}
        className="w-full h-16 p-4 text-x1"
      />
    </div>
  );
}

export default EditableTextBox;