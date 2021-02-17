import React from "react";

function LoginSignupNav() {

    return (
<nav className="navbar bg-white">
  <a className="navbar-brand" href="#">
  <img
        alt=""
        src={process.env.PUBLIC_URL+"/images/logo.png"}
        to="/welcome"
        width="60"
        height="60"
        className="d-inline-block align-top"
      />{' '}
  </a>
</nav>
    );
}

export default LoginSignupNav;