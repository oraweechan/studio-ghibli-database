import {Link} from "react-router-dom"
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
function Header() {

  

    return (
      <>

      <Navbar bg="light" variant="light">

    <Navbar.Brand href="/">Studio Ghibli</Navbar.Brand>
    <Nav className="me-auto">
     
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/myFavorites">My Favorites</Link>
      

    

    </Nav>

  </Navbar>
 
  

      {/* <div className="Header">
              
              <Link to="/myFavorites"> My Favorites </Link>
      </div> */}
      </>
    );
    }
  
  export default Header;