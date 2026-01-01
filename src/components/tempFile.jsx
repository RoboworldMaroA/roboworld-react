import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../css/HomeProjects.css'
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const cardData = [
  {
    title: "Automation",
    img: "https://via.placeholder.com/300x180?text=Automation", // Replace with your image
    desc: "Short description about automation project.",
    link: "https://automation.example.com"
  },
  {
    title: "Mobile Robots",
    img: "https://via.placeholder.com/300x180?text=Mobile+Robots", // Replace with your image
    desc: "Short description about mobile robots project.",
    link: "https://mobilerobots.example.com"
  }
];

const HomeProjects = () => {
  const [flipped, setFlipped] = useState([false, false]);

  const handleFlip = idx => {
    setFlipped(f => f.map((val, i) => i === idx ? !val : val));
  };

  return (
    <Container className="justify-content-md-center">
      <Row>
        <Col id="homeProjects">
          <motion.h2
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            My Projects
          </motion.h2>
          <motion.p
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            Explore my work in automation and mobile robotics.
          </motion.p>
        </Col>
      </Row>
      <Row className="mt-4">
        {cardData.map((card, idx) => (
          <Col md={6} key={card.title} className="mb-4">
            <Card className="h-100 text-center">
              <motion.div
                style={{ perspective: 1000 }}
                onClick={() => handleFlip(idx)}
              >
                <motion.img
                  src={card.img}
                  alt={card.title}
                  className="card-img-top"
                  style={{ cursor: "pointer", width: "100%", height: "180px", objectFit: "cover" }}
                  animate={{ rotateY: flipped[idx] ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
                {flipped[idx] && (
                  <Button
                    variant="primary"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Project
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeProjects;