import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <Link
            style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
            to="/about"
          >
            About
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
