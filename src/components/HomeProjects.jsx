import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/HomeProjects.css'

const HomeProjects = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState("My Projects container");



  return (
    <Container className="justify-content-md-center">
        <Row>
          <Col id="homeProjects" ></Col>
    
      <p>{displayedText}</p>
   </Row>
   </Container>
   
  );
};
export default HomeProjects;