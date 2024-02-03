import React, { useState } from 'react';

const Flashcard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    isFlipped=false
  };

  return (
    <div
      className={`relative w-80 h-48 bg-gray-300 p-4 rounded shadow-md cursor-pointer ${isFlipped ? 'bg-red-300' : 'bg-blue-300'}`}
    //   onClick={handleClick}
    >
      <div className={`absolute w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out transform ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="front backface-hidden">{!isFlipped && frontContent}</div>
        <div className="back backface-hidden absolute rotate-y-180">{isFlipped && backContent}</div>
      </div>
    </div>
  );
};

export default Flashcard;