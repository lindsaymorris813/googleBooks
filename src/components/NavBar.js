import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg">
      <Link to="/" className={location.pathname === "/"}>
        <h1>Google Books</h1>
      </Link>
      <div className="navbar navbar-expand-lg" id="customNavBar">
        <ul className="nav mr-auto">
          <li className="nav-item">
            <Link to="/search" className={location.pathname === "/search" ? "nav-link active" : "nav-link"}>
              Search
        </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/saved"
              className={location.pathname === "/Saved" ? "nav-link active" : "nav-link"}
            >
              Saved
        </Link>
          </li>
          </ul>
      </div>
    </nav>
  );
}

export default NavBar;