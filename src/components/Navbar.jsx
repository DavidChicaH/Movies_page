import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  }
  
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">Logo</h1>
      <div className="menu-icons" onClick={handleClick}>
        {clicked ? (<i className="fas fa-times"></i>) : (<i className="fas fa-bars"></i>)}
      </div>
      <ul className="nav-menu">
        <li className="nav-links">
          <Link>Movies</Link>
        </li>
        <li className="nav-links">
          <Link>Actors</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
