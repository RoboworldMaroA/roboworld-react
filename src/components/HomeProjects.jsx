import React, { useState, useEffect } from 'react';
import { Container, Row, Col,Card, Button } from 'react-bootstrap';
import '../css/HomeProjects.css'
import { motion } from 'framer-motion';
// import segregatorImg from '../assets/images_home/segregator_with_elim2_small.jpg';
// import abbImg from '../assets/images_home/ABB4xs.jpg';
// import sixWheelImg from '../assets/images_home/six_wheel2.jpg';




const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// https://drive.google.com/uc?export=view&id=1-OMgzd7Zq8O4p1FQG__-yLlaiwwNIv5L
// https://drive.google.com/file/d/1-OMgzd7Zq8O4p1FQG__-yLlaiwwNIv5L/view?usp=sharing
// https://drive.google.com/file/d/1-OMgzd7Zq8O4p1FQG__-yLlaiwwNIv5L/view?usp=sharing

// https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
// https://drive.google.com/uc?export=view&id=1-OMgzd7Zq8O4p1FQG__-yLlaiwwNIv5L
const cardData = [
  {
    title: "Automation",
    img: "/images_home/segregator_with_elim2_small.jpg", // Front image
    backImg: "/images_home/ABB4xs.jpg", // Back image
    desc: "ABB and PLC programming for industrial automation.",
    link: "https://roboworld.pl/automations.html"
  },
  {
    title: "Mobile Robots",
    img: "/images_home/six_wheel2.jpg", // Front image
    backImg: "/images_home/4WheelsRaspberryPi3Front4samll.jpg", // Back image
    desc: "Mobile robots for various applications. Arduino, Raspberry Pi, Vision Systems.",
    link: "https://roboworld.pl/mobile_robots.html"
  }
];



const HomeProjects = ({ text, delay }) => {
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

<motion.div variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: 0.2 }}>

      {/* Display Card with delayed text */}

      <Row className="mt-4">
        {cardData.map((card, idx) => (
          <Col md={6} key={card.title} className="mb-4">
            <Card className="h-100 text-center"
            style={{
          background: "#000",
          border: "none",
          color: "#fff",
          boxShadow: "none"
        }}>
              <motion.div
                className="flip-card"
                style={{ perspective: 1000 }}
                // onClick={() => handleFlip(idx)}
              >
                <motion.div
                  className="flip-card-inner"
                  // animate={{ rotateY: flipped[idx] ? 180 : 0 }}
                  // transition={{ duration: 0.6 }}
                  // style={{ width: "100%", height: "360px" }}
                  // style={{ width: "100%", height: "265px" }}
                >
                  <div className="flip-card-front">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="card-img-top"
                      // style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "0.375rem" }}
                      style={{ width: "80%", height: "300px", objectFit: "cover", borderRadius: "0.375rem", marginBottom: "3%" }}
                    />
                  </div>
                  <div className="flip-card-back">
                    <img
                      src={card.backImg}
                      alt={card.title + " details"}
                      className="card-img-top"
                      // style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "0.375rem"}}
                      style={{ width: "80%", height: "265px", objectFit: "cover", borderRadius: "0.375rem", paddingTop: "0%" }}
                      onClick={() => {card.link && window.open(card.link, "_blank")}}
                    />

                       <Button
                    variant="dark"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{marginTop:"3%"}}
                  >
                    Visit Project
                  </Button>
                  </div>
                </motion.div>
              </motion.div>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

</motion.div>
   </Container>
   
  );
};
export default HomeProjects;