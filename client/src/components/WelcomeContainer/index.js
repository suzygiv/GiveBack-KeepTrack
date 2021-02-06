import React from "react";
import {Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import "./styles.css";



function WelcomeContainer() {
    return (
<Container style={{border: "black 2px solid", marginTop: "50px", padding: "50px"}}>
  <Row>
        <Col size="sm-12">
          <h1>Give Back - Keep Track</h1>
          </Col>
          </Row>
      <Row>
        <Col size="sm-12">
            {/* get request to get username ? */}
            <p>Welcome username! Today you donated x amount. Good job!</p>
            <p> What would you like to do?</p>
            <div>
            <Link to="/giveback">
            <button className="btn btn-primary"> 
                Give Back
            </button>
             </Link>   
             <Link to="/keeptrack">                   
            <button className="viewBook btn btn-success">
                Keep Track
             </button>
             </Link> 
             
            </div>
   
</Col>
</Row>
</Container>
);
}

export default WelcomeContainer;