import {Link} from "react-router-dom"
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Col } from "react-bootstrap";
function Header() {

  

    return (
      
    <Col>
      <Navbar bg="light" variant="light">
        <Navbar.Brand to="/">Studio Ghibli</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/myFavorites">My Favorites</Link>
        </Nav>
      </Navbar>
    </Col>
 
      
    );
    }
  
  export default Header;