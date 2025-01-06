import React from "react";
import logo from "../assets/ArgentBankLogo.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Header(){
    return (
        <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src= {logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/sign-in">
          <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
            Sign In
          </Link>
        </div>
      </nav> 
    )
}

export default Header;