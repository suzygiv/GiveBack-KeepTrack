import React from "react";
import { Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
import "./style.css";


function Nav() {

    return (<>
{/*   
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
    </Navbar.Brand> */}
    <nav className="navbar navbar-expand-lg navbar-light">
    <Link className="navbar-brand" to="/welcome">     
    <img
        alt=""
        src={process.env.PUBLIC_URL+"/images/logo.png"}
        to="/welcome"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link navRight" to="/">Login</Link>
                    <Link className="nav-link navRight" to="/givebackentry">Giveback</Link>
                    <Link className="nav-link navRight" to="/keeptrack">Keeptrack</Link>
                    <Link className="nav-link navRight" to="/">Logout</Link>   
                </div>
            </div>
    </nav>
    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                <Link className="nav-link navRight"to="/">Login <span className="sr-only">(current)</span></Link>
                <Link className="nav-link navRight" to="/givebackentry">Giveback</Link>
                <Link className="nav-link navRight" to="/keeptrack">Keeptrack</Link>
                <Link className="nav-link navRight" to="/">Logout</Link>     
            </Navbar.Collapse>
        
    </Navbar> */}
   

   
    </>
    )
}

export default Nav;