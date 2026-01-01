import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../css/HomeProjects.css'
import { motion } from 'framer-motion';

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const cardData = [
  {
    title: "Automation",
    img: "https://via.placeholder.com/300x180?text=Automation", // Front image
    backImg: "https://via.placeholder.com/300x180/222/fff?text=Automation+Details", // Back image
    desc: "Short description about automation project.",
    link: "https://automation.example.com"
  },
  {
    title: "Mobile Robots",
    img: "https://via.placeholder.com/300x180?text=Mobile+Robots", // Front image
    backImg: "https://via.placeholder.com/300x180/222/fff?text=Robots+Details", // Back image
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
                className="flip-card"
                style={{ perspective: 1000 }}
                onClick={() => handleFlip(idx)}
              >
                <motion.div
                  className="flip-card-inner"
                  animate={{ rotateY: flipped[idx] ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ width: "100%", height: "180px" }}
                >
                  <div className="flip-card-front">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="card-img-top"
                      style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "0.375rem" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={card.backImg}
                      alt={card.title + " details"}
                      className="card-img-top"
                      style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "0.375rem" }}
                    />
                  </div>
                </motion.div>
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

// Add this CSS to your HomeProjects.css:
/*
.flip-card {
  width: 100%;
  height: 180px;
  cursor: pointer;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 180px;
  transform-style: preserve-3d;
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 180px;
  backface-visibility: hidden;
  top: 0;
  left: 0;
}
.flip-card-back {
  transform: rotateY(180deg);
}
*/