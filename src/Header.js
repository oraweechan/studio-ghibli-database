import {Link} from "react-router-dom"
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
function Header() {

  

    return (
      <>

      <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/">Studio Ghibli</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      

      <Nav.Link href="/myFavorites">My Favorites</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
 
  

      {/* <div className="Header">
              
              <Link to="/myFavorites"> My Favorites </Link>
      </div> */}
      </>
    );
    }
  
  export default Header;