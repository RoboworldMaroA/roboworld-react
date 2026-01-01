import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/ComputerVision.css';

//Component display text character by character with interval
//To component are passed variable text - It is displayed text
//And delay accept integers that are milliseconds  


const ComputerVision = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("");

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
    <Container className="justify-content-md-center">
      <Row>
        <Col id="computerVision">
          <p>{displayedText}</p>
          <Button variant="primary">Contact me</Button>
        </Col>
      </Row>

    </Container>
   
  );
};
export default ComputerVision;