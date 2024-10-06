import React, { useState, useEffect } from 'react';
//Component display text character by character with interval
//To component are passed variable text - It is displayed text
//And delay accept integers that are milliseconds  


const DisplayCharacterByCharacter = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState(" ");

  useEffect(() => {
    let currentIndex = 0;

    const timer = setInterval(() => {
     

      if (currentIndex < text.length-1) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        currentIndex++;
        
      } else {
        clearInterval(timer);
      }
    }, delay);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, [text, delay]);

  return (
    <div>
      <p>{displayedText}</p>
    </div>
  );
};
export default DisplayCharacterByCharacter;