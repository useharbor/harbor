import React from "react";
import ContentTextBox from "../components/ContentTextBox.js";
import PaymentTextBox from "../components/PaymentTextBox";

export default function Home() {
  return (
    <div className="flex justify-between p-8 flex-col">
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Publish</h1>
        <p>Create a problem to be solved by the community.</p>
      </div>
      <div className="p-4">
        <ContentTextBox />
        <PaymentTextBox />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
