import React, { useState } from 'react';
import Flashcard from '../components/flashcard.js';
import EditableTextBox from '../components/edit_text.js';
import SolveNavbar from '../components/solve_navbar.js';

const flashcardsData = [
  { front: 'seeded text 1', back: 'Back of Card 1' },
  { front: 'seeded text 2', back: 'Back of Card 2' },
  { front: 'seeded text 3', back: 'Back of Card 3' },
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
        <div className="flex">
        <div className="flex-1 p-4 bg-gray-200">
            <div className="flex flex-col items-center">
                <Flashcard
                    frontContent={<div className="text-center">{flashcardsData[currentIndex].front}</div>}
                    backContent={<div className="text-center">{flashcardsData[currentIndex].back}</div>}
                />
            </div>
                
        </div>
        <div className="flex-1 p-4 bg-blue-200">
                <EditableTextBox
                    initialText={flashcardsData[currentIndex].front}
                />
                <div className="flex mt-5">
                    <button className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded" onClick={goToPrevious}>
                    Invalid
                    </button>
                    <button className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded" onClick={goToNext}>
                    Edit
                    </button>
                    <button className="mx-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-6 px-6 rounded" onClick={goToNext}>
                    Good
                    </button>
                </div>
        </div>
        </div>
    </>
    
  );
};

export default Page;
