import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingBag } from "react-icons/fi";

function ColorSchemesExample() {
  return (
    <>
     <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">FashionFirst</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Men</Nav.Link>
              <Nav.Link href="#features">Women</Nav.Link>
              <Nav.Link href="#pricing">E-Voucher</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#cart">
                  <FiShoppingBag />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;