import React, { useState } from "react";
import { Link } from "gatsby";
import * as constants from "../constants";
import "../styles/navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    console.log(clicked);
    setClicked(true);
    setTimeout(() => setClicked(false), 8000);
  }

  return (
    <nav
      className={clicked ? "navbar-clicked" : "navbar"}
      style={{ color: constants.TEXT_COLOR }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={{ color: constants.TEXT_COLOR }}>LOGO HERE</h1>
      </Link>
      <div className="nav-links">
        <Link
          to="/about"
          className="link"
          activeClassName="activeLink"
          onClick={handleClick}
        >
          About
        </Link>
        <Link to="/skills" className="link" activeClassName="activeLink" onClick={() => handleClick()}>
          Skills
        </Link>
        <Link to="/projects" className="link" activeClassName="activeLink" onClick={() => handleClick()}>
          Projects
        </Link>
        <Link to="/contact" className="link" activeClassName="activeLink" onClick={() => handleClick()}>
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
