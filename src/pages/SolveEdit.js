import React, { useEffect, useState } from "react";
import Flashcard from "../components/flashcard.js";
import EditableTextBox from "../components/edit_text.js";
import SolveNavbar from "../components/solve_navbar.js";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const flashcardsData = [
  { front: "seeded text 1", back: "Back of Card 1" },
  { front: "seeded text 2", back: "Back of Card 2" },
  { front: "seeded text 3", back: "Back of Card 3" },
  // ...add as many flashcards as you like
];

const workerRef = "b6nzDKzQhhUuBDmWW5JC"; // TODO: get this from the user's login
const db = firebase.firestore();

function Page() {
  // const db = firebase.firestore();

  const [cardContent, setCardContent] = useState("");
  const [seedContent, setSeedContent] = useState("");
  const [jobId, setJobId] = useState("");
  // var original = "";

  // Use useEffect to run onPageLoad on page load
  useEffect(() => {
    onPageLoad();
  }, []); // The empty dependency array [] ensures it runs only once on page load

  const getNewCard = async () => {
    const displayEditCardURL = `https://us-central1-harbor-db.cloudfunctions.net/displayEditCard?workerRef=${workerRef}`;
    const response = await fetch(displayEditCardURL);
    const data = await response.json();
    const edit = data.edit;
    const original = data.original;
    if (edit === null || original === null) {
      console.log("No edit found");
      return;
    }
    console.log(edit, original);
    setCardContent(edit._fieldsProto.content.stringValue);
    setSeedContent(original._fieldsProto.seed_content.stringValue);
    setJobId(original._fieldsProto.job_id.stringValue);
  };

  const onPageLoad = async (e) => {
    console.log("Page loaded");
    getNewCard();
  };

  const [text, setText] = useState(cardContent);
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  // const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {};

  const handleInvalid = async (e) => {
    try {
      await db.collection("ContentEdits").add({
        assigned: true,
        content: cardContent,
        job_id: jobId,
        job_name: "EXISTING",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        voting_card: true,
        worker: workerRef,
      });
      getNewCard();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // increment num_edits
  // add yourself to workers[]
  // if the num_edits = 3, then send the payment to everyone under workers[]
  // and set status to 3
  const handleEdit = async (e) => {
    try {
      // console.log("original", original);
      await db.collection("ContentEdits").add({
        assigned: true,
        content: text,
        job_id: jobId,
        job_name: "EXISTING",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        voting_card: true,
        worker: workerRef,
      });
      getNewCard();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  // increment num_edits
  // add yourself to workers[]
  // if the num_edits = 3, then send the payment to everyone under workers[]
  // and set status to 3
  const handleGood = async (e) => {
    try {
      await db.collection("ContentEdits").add({
        assigned: true,
        content: cardContent,
        job_id: jobId,
        job_name: "EXISTING",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        voting_card: true,
        worker: workerRef,
      });
      getNewCard();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <SolveNavbar />
      <div className="flex">
        <div className="flex-1 p-4 bg-gray-200">
          <div className="flex flex-col items-center">
            <Flashcard
              frontContent={<div className="text-center">{cardContent}</div>}
              backContent={<div className="text-center">{seedContent}</div>}
            />
          </div>
        </div>
        <div className="flex-1 p-4 bg-blue-200">
          <div>
            <label htmlFor="editableInput">Edit me:</label>
            <input
              type="text"
              id="editableInput"
              value={text}
              onChange={handleTextChange}
              className="w-full p-4 text-x1"
            />
          </div>
          <div className="flex mt-5">
            <button
              className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded"
              onClick={handleInvalid}
            >
              Flag
            </button>
            <button
              className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded"
              onClick={handleGood}
            >
              Good
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
