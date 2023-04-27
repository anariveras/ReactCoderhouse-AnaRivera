import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/logo-carita.png';
import "../../styles/styles.css";

const NavBar = () => {
    return (
        <Navbar className="bg-color" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="txtNav-color">
        <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top img-right"
            />
            Oh Bonita Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sucursales">Sucursales</Nav.Link>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Skincare</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Make up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cuidado del cabello</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ayuda
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
            <Nav>
             <CartWidget/>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar