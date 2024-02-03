import React, { useState } from "react";

function ContentTextBox() {
  // State to hold the value of the textbox
  const [value, setValue] = useState("");

  // Function to update the state based on textbox changes
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        class="border w-1/2 py-5"
      />
      <p>You typed: {value}</p>
    </div>
  );
}

export default ContentTextBox;
