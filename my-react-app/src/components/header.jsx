
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/actions/authActions.jsx';
import logo from '../assets/ArgentBankLogo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Header({ isAuthenticated, user, logout }) {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
            <span> {user.userName}</span>
            <Link to="/sign-in" onClick={logout} className="main-nav-item">
            <FontAwesomeIcon icon={faSignOutAlt} className="exitIcon"/>
             Sign Out 
             </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
