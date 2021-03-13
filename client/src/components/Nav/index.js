import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

import "./style.css";

function Nav() {
  return (
    //
    <>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <ReactBootstrap.Navbar.Brand href="/welcome">
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            to="/welcome"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto"></ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="/about">
              About
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="/givebackentry">
              Giveback
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="/keeptrack">
              Keeptrack
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="/">
              Logout
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </>
  );
}

export default Nav;
