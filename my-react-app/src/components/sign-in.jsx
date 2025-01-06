import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";


function SignIn(){
    return(
        <div>
            <main className="main bg-dark">
      <section className="sign-in-content">
       <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label>
          </div>
          <Link to="/user">
           <button className="sign-in-button">Sign In</button> 
           </Link>
        </form>
      </section>
    </main>

        </div>
    )
}

export default SignIn;