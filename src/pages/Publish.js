import React from "react";
import ContentTextBox from "../components/ContentTextBox.js";
import PaymentTextBox from "../components/PaymentTextBox";
import JobForm from "../components/JobForm.js";
import Footer from "../components/footer.js";

// const { getFirestore, Timestamp } = require("firebase-admin/firestore");

export default function Home() {
  return (
    <>
      <div className="flex justify-between p-8 flex-col">
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Publish</h1>
          <p>Create a problem to be solved by the community.</p>
        </div>
        <JobForm />
      </div>
      <Footer></Footer>
    </>
  );
}
