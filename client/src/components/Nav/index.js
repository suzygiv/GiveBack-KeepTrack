import React from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import "./style.css";


function Nav() {

  return (<>

    <Navbar bg="white" variant="light">
      <Navbar.Brand href="/welcome">
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          to="/welcome"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link navRight" to="/">Login <span className="sr-only">(current)</span></Link>
          <Link className="nav-link navRight" to="/givebackentry">Giveback</Link>
          <Link className="nav-link navRight" to="/keeptrack">Keeptrack</Link>
          <Link className="nav-link navRight" to="/">Logout</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  </>
  )
}


export default Nav;