import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand to="/">
        <img
          src="https://res.cloudinary.com/orawee/image/upload/v1636054581/StudioGhibli/pngwing.com_1_vszazb.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/myFavorites">
          Favorites
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Header;
