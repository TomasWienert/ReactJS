import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logobazar from '../../images/logobazar.png'; 
import CartWidget from '../CartWidget/CartWidget';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img src={logobazar} alt="logo" className="logobazar" id="logoBazar"/>
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
          <Form className="d-flex">
              <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
          </Form>
          <div>
            <CartWidget className="logoCarrito"/>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;

