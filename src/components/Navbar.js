import React from "react";
import { moonOutline, moon } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
          onClick={props.toggleMode}
        >
          <IonIcon icon={props.mode === "light" ? moonOutline : moon} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string,
};
