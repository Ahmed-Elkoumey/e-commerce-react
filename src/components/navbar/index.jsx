import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navbar.css";

// redux
import {useSelector} from "react-redux"


function NavBar() {

const globalStore = useSelector((store)=>store.cart.cuonter)




  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="mb-5"
    >
      <Container>
        <Link to="/" className="navbar-brand text-danger fw-bold fs-3">
          Elegant
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/about" className="nav-link text-info fs-3 mx-md-5">
              About
            </Link>

            <div className="position-relative">
              <Link to="/cart" className="nav-link text-info fs-3 me-md-3">
                <AiOutlineShoppingCart className="text-warning fs-1" />
              </Link>

              <span className="text-danger fs-3 position-absolute number-cuont">
                {globalStore}
              </span>
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
  );
}

export default NavBar;
