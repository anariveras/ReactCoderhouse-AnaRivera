import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/logo-carita.png';
import "../../styles/styles.css";
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className="bg-color" expand="lg">
      <Container>
        <Link to='/'>
        <Navbar.Brand className="txtNav-color">
        <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top img-right"
            />
            Oh Bonita Store</Navbar.Brand> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link >Sucursales</Nav.Link>
            <Nav.Link >Ayuda</Nav.Link>
            <Nav.Link ><NavLink to={`/category/Skincare`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Skincare</NavLink></Nav.Link>
            <Nav.Link ><NavLink to={`/category/Makeup`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Make up</NavLink></Nav.Link>
            <Nav.Link ><NavLink to={`/category/CuidadoCapilar`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Cuidado Capilar</NavLink></Nav.Link>
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