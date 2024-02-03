import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function JobForm() {
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const db = firebase.firestore();

  const handleSubmit = async (e) => {
    console.log("submitting");
    e.preventDefault();

    try {
      await db.collection("Jobs").add({
        content: content,
        job_id: Math.random().toString(36).substring(7),
        job_name: "job name",
        original_language: "cn",
        price: price,
        publisher: "publisher name",
        num_edits: 3,
        seed_content: "seed content",
        status: 0,
        target_language: "en",
        versions: [],
        workers: [],
      });

      alert("Data added to Firestore!");
      setContent("");
      setPrice("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="content">content:</label>
      <input
        type="text"
        id="content"
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border w-1/2 py-5"
      />

      <label htmlFor="price">price:</label>
      <input
        type="number"
        id="price"
        required
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border w-1/2 py-5"
      />

      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
}

export default JobForm;
