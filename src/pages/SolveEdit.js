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

const Page = () => {
  const db = firebase.firestore();

  const onPageLoad = () => {
    console.log("Page loaded");
    db.collection("Jobs")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
          flashcardsData.push(doc.data());
        });
      });
  };

  // Use useEffect to run onPageLoad on page load
  useEffect(() => {
    onPageLoad();
  }, []); // The empty dependency array [] ensures it runs only once on page load

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : flashcardsData.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < flashcardsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <SolveNavbar />
      <div className="flex">
        <div className="flex-1 p-4 bg-gray-200">
          <div className="flex flex-col items-center">
            <Flashcard
              frontContent={
                <div className="text-center">
                  {flashcardsData[currentIndex].front}
                </div>
              }
              backContent={
                <div className="text-center">
                  {flashcardsData[currentIndex].back}
                </div>
              }
            />
          </div>
        </div>
        <div className="flex-1 p-4 bg-blue-200">
          <EditableTextBox initialText={flashcardsData[currentIndex].front} />
          <div className="flex mt-5">
            <button
              className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded"
              onClick={goToPrevious}
            >
              Invalid
            </button>
            <button
              className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded"
              onClick={goToNext}
            >
              Edit
            </button>
            <button
              className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded"
              onClick={goToNext}
            >
              Good
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
