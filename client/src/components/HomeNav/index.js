import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

import "./styles.css";

function HomeNav() {
  return (
    //
    <>
      <ReactBootstrap.Navbar
        className="sticky-top"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
      >
        <ReactBootstrap.Navbar.Brand>
          <img
            alt=""
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            to="/welcome"
            width="50"
            height="52"
            className="d-inline-block align-top"
          />
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Brand href=""></ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="#steps">
              Getting Started
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown
              title="About"
              id="collasible-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="#mission">
                Our Mission
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#meet-team">
                Meet the team
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#developer-notes">
                Developer Notes
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="#acknowledgements">
                Acknowledgements
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="/login">
              Login
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link eventKey={2} href="/signup">
              Sign Up
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </>
  );
}

export default HomeNav;
