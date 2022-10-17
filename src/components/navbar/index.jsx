import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai";
import ShoppingCart from '../shopping';
import './navbar.css'

function NavBar(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-5">
    <Container>
      <Link to="/" className='navbar-brand text-danger fw-bold fs-3'>Elegant</Link>
              
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          <Link to="/about" className='nav-link text-info fs-3 mx-md-5'>About</Link>



       <div className="position-relative">
        
       <NavDropdown  title={<AiOutlineShoppingCart className='text-warning fs-1'/>} id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <ShoppingCart/> 
            
            </NavDropdown.Item>
          
           
          </NavDropdown>
          <span className='text-danger fs-3 position-absolute number-cuont'>{props.number}</span>
       </div>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">LogIn</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            ReGister
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar