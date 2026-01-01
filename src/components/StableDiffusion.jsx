import React, { useState, useEffect } from 'react';
// import { Container } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/StableDiffusion.css';
import { motion } from 'framer-motion';
//Component display text character by character with interval
//To component are passed variable text - It is displayed text
//And delay accept integers that are milliseconds  


const StableDiffusion = ({ text, delay }) => {
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

  const textOnTopVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 5, ease: "easeOut" } },
};




  return (
    <Container className="justify-content-md-center">
      <Row>
        <Col id="stableDiffusion">
          <p>{displayedText}</p>

    <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
            Welcome to Stable Diffusion Component! 
            Here, you can explore the fascinating world of AI-generated images using the Stable Diffusion model.
             Whether you're an artist looking to create unique visuals or a developer interested in AI technologies, 
             this component provides a gateway to harness the power of generative models.
              Dive in and start creating stunning images today!
              </motion.p>
            

          <Button variant="primary">Contact me press</Button>


        
        </Col>
      </Row>

    </Container>
   
  );
};
export default StableDiffusion;