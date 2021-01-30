import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function Nav() {

    return (<>
        <Router>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      GiveBack-KeepTrack
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Link className="nav-link navRight"to="/">Sign In <span className="sr-only">(current)</span></Link>
                <Link className="nav-link navRight" to="/givebackentry">GiveBack</Link>
                <Link className="nav-link navRight" to="/keeptrack">KeepTrack</Link>
            </Navbar.Collapse>
    </Navbar>
    </Router>

   
    </>
    )
}

export default Nav;