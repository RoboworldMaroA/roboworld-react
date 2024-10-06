
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../css/NavBar.css'


const  NavBar= () => {
  return ( 
 
 <nav id="nav-bar" >
 <Navbar id="nav"expand="lg"  >
      <Container className="justify-content-md-center" id="containerNavBar">
        <Navbar.Brand id="navBarBrand"href="/"><b>ROBO-WORLD</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
        <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Navbar.Collapse id="navbarScroll"> */}
          <Nav 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            
          >
            <Nav.Link id="navLinks" href="/">Home</Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/Welcome">Automations</NavDropdown.Item>
              <NavDropdown.Item href="/WelcomeNew">Mobile Robots</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Software Development
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              About me
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </nav>

  )
}

export default NavBar ;