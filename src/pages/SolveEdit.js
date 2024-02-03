import React, { useEffect, useState } from "react";
import Flashcard from "../components/flashcard.js";
import EditableTextBox from "../components/edit_text.js";
import SolveNavbar from "../components/solve_navbar.js";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Footer from "../components/footer";

const flashcardsData = [
  { current: "She is studying computer science at the university.", 
    original: "She learns computing knowledge at the educational institution." },
  { current: "The meeting will happen in on Zoom.", 
    original: "The conference will take place in a virtual environment." },
  { current: "The artist exhibited their abstract paintings at the contemporary art gallery.", 
    original: "The creator displayed their summary drawings at the present-day art exhibition." },
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
        <SolveNavbar/>
        <div className="Instruction">
            <header className="bg-indigo-300 text-[20px] text-center font-semibold py-2 px-4">
                Given the original text and current translation, choose to invalidate if the translation is very incorrect, edit it, or confirm that it is good.
            </header>
        </div>
        <div>
            <header className="w-full h-100 text-[20px] items-center text-center mt-4 mb-2">
                Original Translation:
            </header>
            <header className="w-full h-100 text-[30px] items-center text-center">
                {flashcardsData[currentIndex].original}
            </header>
        </div>
        <div className="flex p-20">
          <div className="flex-1 p-4">
              <div className="flex flex-col items-center">
                  <Flashcard
                      frontContent={<div className="text-center">{flashcardsData[currentIndex].current}</div>}
                  />
              </div>
          </div>
          <div className="flex-1 p-4">
                  <EditableTextBox
                      initialText={flashcardsData[currentIndex].current}
                  />
                  <div className="flex mt-5">
                      <button className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded" onClick={goToPrevious}>
                      Invalid
                      </button>
                      <button className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold p-4 rounded" onClick={goToNext}>
                      Edit
                      </button>
                      <button className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded" onClick={goToNext}>
                      Good
                      </button>
                  </div>
          </div>
        </div>
        <Footer></Footer>
    </>
    
  );
};

export default Page;
