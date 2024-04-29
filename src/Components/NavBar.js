import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FiShoppingBag } from "react-icons/fi";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" fixed='top'>
        <Container>
          <Navbar.Brand href="#home">FashionFirst</Navbar.Brand>
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
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;