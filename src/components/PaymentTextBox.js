import React, { useState } from "react";

function PaymentTextBox() {
  // State to hold the value of the textbox
  const [value, setValue] = useState("");

  // Function to update the state based on textbox changes
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        class="border w-1000 h-1000"
      />
      <p>You want to pay: {value} XRP</p>
    </div>
  );
}

export default PaymentTextBox;
