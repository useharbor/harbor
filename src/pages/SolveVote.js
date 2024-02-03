import React, { useState } from 'react';
import Flashcard from '../components/flashcard.js';
import SolveNavbar from '../components/solve_navbar.js';
import Footer from '../components/footer.js';

const flashcardsData = [
    { current_1: "She is studying computer science at the university.", 
      current_2: "She is studying computer science at school.", 
      original: "She learns computing knowledge at the educational institution." },
    { current_1: "The meeting will happen in on Zoom.",
      current_2: "The meeting will happen through an online source.", 
      original: "The conference will take place in a virtual environment." },
    { current_1: "The artist exhibited their abstract paintings at the contemporary art gallery.",
      current_2: "The artist displayed their paintings at the art gallery.", 
      original: "The creator displayed their summary drawings at the present-day art exhibition." },
    // ...add as many flashcards as you like
  ];

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : flashcardsData.length - 1);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => prevIndex < flashcardsData.length - 1 ? prevIndex + 1 : 0);
  };

  return (
    <>
        <SolveNavbar/>
        <div className="Instruction">
            <header className="text-[20px] text-center font-semibold py-2 px-4 bg-indigo-300">
                Pick the option that is the best improvement over the original            
            </header>
        </div>
        <div>
            <header className="w-full h-100 text-[20px] items-center text-center mt-4 mb-2">
                Original Translation:
            </header>
            <header className="w-full h-100 text-[30px] items-center text-center p-4">
                {flashcardsData[currentIndex].original}
            </header>
        </div>
        <div className="flex mb-20">
            <div className="flex-1 p-4">
                <div className="flex flex-col items-center">
                <Flashcard
                    frontContent={<div className="text-center">{flashcardsData[currentIndex].current_1}</div>}
                />
                <button className="mx-2 bg-gray-300 hover:bg-gray-200 text-black font-bold py-6 px-6 rounded p-4" onClick={goToPrevious}>
                    Select V1
                </button>
                </div>
            </div>
            <div className="flex-1 p-4">
                <div className="flex flex-col items-center">
                <Flashcard
                    frontContent={<div className="text-center">{flashcardsData[currentIndex].current_2}</div>}
                />
                <button className="mx-2 bg-gray-300 hover:bg-gray-200 text-black font-bold py-6 px-6 rounded p-4" onClick={goToPrevious}>
                    Select V2
                </button>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
    
  );
};

export default Page;