import {Link} from "react-router-dom"
function Header() {

  

    return (
      <div className="Header">
              <Link to="/"> Home </Link>
              <Link to="/myFavorites"> My Favorites </Link>
      </div>
    );
    }
  
  export default Header;