import React, { useState, useEffect } from 'react';

const DelayedParagraph = ({ delay, delay2 }) => {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [delay]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph2(true);
    }, delay2);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [delay2]);

  return (
    <div>
      {/* {showParagraph && <p>This paragraph is displayed after a delay of {delay} milliseconds.</p>} */}

     <p>{showParagraph && <p>Hello</p> }  {showParagraph2 && <p>World</p>}</p>
    </div>
  );
};
export default DelayedParagraph;