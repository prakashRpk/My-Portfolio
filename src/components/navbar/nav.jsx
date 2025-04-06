import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css'

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Prakash R</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">personal</Nav.Link>
            <Nav.Link href="#About">service</Nav.Link>
            {/* <Nav.Link href="#Projects">Projects</Nav.Link> */}
            <NavDropdown title="Projects" id="basic-nav-dropdown">  
              <NavDropdown.Item href="#Projects/html&css" className='dropdown-list' >Html & css</NavDropdown.Item>
              <NavDropdown.Item href="#Projects/python" className='dropdown-list'>Python</NavDropdown.Item>
              <NavDropdown.Item href="#Projects/front-end" className='dropdown-list'>Front-end</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='dropdown-list'>react js</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='dropdown-list'>photo shop</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" className='dropdown-list'>video editing</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;