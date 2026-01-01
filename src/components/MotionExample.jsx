// In your component
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

function MotionExample() {
  return (
    <Container className="my-5">
      <h1>Welcome to RoboWorld</h1>
      <p>Your initial visible text...</p>

      <Row className="my-5">
        <Col md={6}>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% visible
          >
            Mobile Robots
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }} // Stagger delay
          >
            Details about your mobile robots...
          </motion.p>
          <motion.img
            src="path/to/mobile-robot.jpg"
            alt="Mobile Robot"
            className="img-fluid"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4 }} // Stagger delay
          />
        </Col>
        <Col md={6}>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.6 }}
          >
            More text about mobile robots.
          </motion.p>
        </Col>
      </Row>

      {/* Repeat for other sections, adjusting delays */}

    </Container>
  );
}

export default MotionExample;