import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="Home" spy={true} smooth={true} duration={500}>
          Phanindra.Mallela
        </Link>
      </div>
      <div className="navbar-right-menubar">
        {isMenuOpen ? (
          <div className="navbar-menu-options">
            <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="About"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="Skills"
              spy={true}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="Projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </div>
        ) : (
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}
      </div>
      <div className="navbar-right-options">
        <Link to="Home" spy={true} smooth={true} duration={500}>
          Home
        </Link>
        <Link to="About" spy={true} smooth={true} duration={500}>
          About
        </Link>
        <Link to="Skills" spy={true} smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="Projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="Contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;