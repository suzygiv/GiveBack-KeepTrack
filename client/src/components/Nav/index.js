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
        src={process.env.PUBLIC_URL+"/images/logo.png"}
        to="/welcome"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Link className="nav-link navRight"to="/">Login <span className="sr-only">(current)</span></Link>
                <Link className="nav-link navRight" to="/givebackentry">GiveBack</Link>
                <Link className="nav-link navRight" to="/keeptrack">KeepTrack</Link>
                <Link className="nav-link navRight" to="/">Logout</Link>
                
            </Navbar.Collapse>
        
    </Navbar>
   

   
    </>
    )
}

export default Nav;