
import DisplayCharacterByCharacter from './DisplayCharacterByCharacter';
import '../css/Home.css';
// import { Col, Container, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from 'framer-motion';

const  Home= () => {


const textOnTopVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 5, ease: "easeOut" } },
};
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};


    return (  
    <Container>
        <Row>
          <Col id="home" >
      {/* <h1><DisplayCharacterByCharacter text="  Hello World !" delay={100} /></h1> */}


   <h1><DisplayCharacterByCharacter text="  Welcome to RoboWorld." delay={80} /></h1>
<h1><DisplayCharacterByCharacter text="   Where Ideas Take Form!" delay={220} /></h1>
<br/>
      <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">
        
       Welcome to RoboWorld, the digital home of Marek Augustyn's passion for robotics and software development. 
       Step into a world where lines of code bring machines to life and innovative ideas transform into tangible solutions. 
       Here, you'll discover a collection of projects that blend hardware ingenuity with software prowess,
        showcasing the exciting journey from concept to creation.
        </motion.p>
  <motion.h2 variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}>Journey Through My Projects: Skills and Tools in Action</motion.h2>

  <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="sectionHomePage">Mobile Robotics: From Basics to Advanced Autonomy</motion.p>
        <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}  class="paragraphAlignedToLeft">
          Dive into the fascinating realm of Mobile Robots, where you'll witness the evolution of autonomous machines.
           My journey began with foundational electronics, meticulously crafting components like DC motor controllers with L298N and proximity sensors, even developing a custom color line sensor for a line follower.
           Explore my first line-following robot, driven by Arduino and servo motors, with its logic meticulously coded in C language.
          </motion.p>
          <motion.p  variants={textOnTopVariant}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">Next, discover a more complex six-wheel robot powered by four servo motors and two DC motors, 
            all orchestrated by an Atmega 8 microcontroller. The pinnacle of this section is my latest creation: a four-wheel robot equipped with DC motors,
             an Echo sonar, a proximity sensor, and a camera. This advanced platform is commanded by Raspberry Pi 4 and 5,
              featuring a custom web application built with a Flask and Python backend for intuitive control. Imagine typing text into a terminal and hearing the robot speak your words! You'll also find demonstrations of object detection capabilities,
             enabling the robot to navigate and react based on commands presented on cards in its view.</motion.p>

  <motion.p  variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="sectionHomePage">Automation: Precision Engineering in Action
                      </motion.p>
          <motion.p variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}class="paragraphAlignedToLeft">
        Beyond mobile platforms, delve into the world of Automation, where efficiency and precision are paramount. 
        See a prototype machine designed for sorting tablets by thickness, a project where I meticulously assembled the machine, designed its electrical box, and programmed a Mitsubishi PLC during my time in an R&D department. This section also features powerful ABB robots that I programmed as a Manufacturing Engineer. Watch videos showcasing these robots seamlessly picking up parts from racks and loading them into CNC turning centers,
         a testament to the transformative power of industrial automation.</motion.p>
          <motion.p  variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">Through these projects, you'll gain insight into a diverse set of skills including electronic circuit design,
             embedded programming (C, Arduino), web development (Flask, Python), computer vision, 
             and industrial automation (PLC programming, robot programming).
              Each project is a testament to the continuous learning and rewarding challenges within the field of robotics and software. I invite you to explore, learn,
             and perhaps even find inspiration for your own innovative endeavors!</motion.p>
             <motion.p  variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }} class="paragraphAlignedToLeft">Regards</motion.p>
          < motion.p  variants={textVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}class="paragraphAlignedToLeft">Marek</motion.p>
      
        </Col>
        </Row>
        
    </Container>)
}
 
export default Home ;