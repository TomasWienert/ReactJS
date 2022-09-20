import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logobazar from '../../images/logobazar.png'; 
import CartWidget from '../CartWidget/CartWidget';
/* import {Link} from "react-router-dom"; */

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Nav.Link to = "/"> */}
          <img src={logobazar} alt="logo" className="logobazar" id="logoBazar"/>
        {/* </Nav.Link> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">VAJILLA TSUJI</Nav.Link>
            <Nav.Link href="#action2">VAJILLA VERBANO</Nav.Link>
          </Nav>
          <div className='cartWidgetContainer'>
            <CartWidget className="logoCarrito"/>
          </div>
          <Form className="d-flex">
              <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

