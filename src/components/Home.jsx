
import DisplayCharacterByCharacter from './DisplayCharacterByCharacter';
import '../css/Home.css'
import { Col, Container, Row } from 'react-bootstrap';

const  Home= () => {



    return (  
    <Container className="justify-content-md-center">
        <Row>
          <Col id="home" >
      <h1><DisplayCharacterByCharacter text="  Hello World !" delay={100} /></h1>

      <p class="paragraphAlignedToLeft">
          Welcome to my website about robotics and software development.
        </p>

        <p class="paragraphAlignedToLeft">
          On this website you can find some projects that I have done. They are in the field of automation and robotics
          and software development.
          </p>
          <p class="paragraphAlignedToLeft">In my opinion, robotics is very
          good for learning coding, but also for design and electronics.</p>
          <p class="paragraphAlignedToLeft">The
          field is constantly changing and requires a lot of time commitment,
          but it is also incredibly fun and rewarding.</p> 
          <p class="paragraphAlignedToLeft">Below are links to sections where you will find videos and photos. There you will also find programs written
          by me that you can use as inspiration for your own projects.</p>
          <p class="paragraphAlignedToLeft">I hope you will find something interesting for yourself. </p>
        
          <p class="paragraphAlignedToLeft">Cheers</p>
          <p class="paragraphAlignedToLeft">Marek</p>
      
        </Col>
        </Row>
        
    </Container>)
}
 
export default Home ;