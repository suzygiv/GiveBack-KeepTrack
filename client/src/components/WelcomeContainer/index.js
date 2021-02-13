import React from "react";
import {Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import "./styles.css";




function WelcomeContainer() {
    return (
        <>
<Container style={{display: "flex", justifyContent: "center", marginBottom:"50px", marginTop:"20px"}}>
  {/* <div className="shadow bg-white rounded" style={{ maxWidth: "100%", padding: "50px"}}> */}
        <div>
            
  <Row>
    
        <Col size="md-12">
          <div>
        <p style={{fontSize: "3.0rem", whiteSpace: "nowrap", fontFamily: "Montserrat, SansSerif", marginBottom: "-35px"}}><span style={{color: "#50BCD5" }}>give</span>back </p>
        <p style={{fontSize: "3.0rem", whiteSpace: "nowrap", fontFamily: "Montserrat, sansSerif", marginBottom:"20px"}}>keep<span style={{color: "#50BCD5" }}>track</span> </p>
        </div>
          </Col>
          
          </Row>
      <Row>
        <Col size="md-12">
          <div>
            {/* get request to get username ? */}
            <p style={{fontSize: "1.3rem"}}>Welcome username! Today you donated x amount. Good job!</p>
            <p style={{fontSize: "1.2rem"}}> What would you like to do?</p>
            <div>
            <Link to="/givebackentry">
            <button style={{margin:"10px"}}className="btn btn-primary custom-btn"> 
                Give Back
            </button>
             </Link>  

             <Link to="/keeptrack">                   
            <button className="viewBook btn btn-success custom-btn">
                Keep Track
             </button>
        
             </Link> 
             </div>
             </div>
             </Col>
</Row>

</div>
</Container>
<Container style={{display: "flex", justifyContent:"center", flexDirection:"row", padding:"50px", paddingBottom:"100%", backgroundColor: "#50BCD5", maxWidth:"100%", margin:"0 auto", maxHeight: "100%"}}>
  <div>
<Row> 
    
        <Col size="md-4"> 
        <div style={{padding:"40px"}}> 
        <div>
        <img
        alt=""
        src={process.env.PUBLIC_URL+"/images/handu.png"}
        width="60px"
        height="60px"
        className="d-inline-block align-top"
      /> 
        </div>
        
      <p>Donate to the organization of your choice.</p>
        </div>
      </Col>
<Col size="md-4">  
            
     <div style={{padding:"40px"}}> 
       
        <img
        alt=""
        src={process.env.PUBLIC_URL+"/images/dollarsign.png"}
        width="60px"
        height="60px"
        className="d-inline-block align-top"
      /> 
        
        
      <p>Enter your donation amount and other details.</p>
        </div>
</Col>
<Col size="md-4">  
            
<div style={{padding:"40px"}}> 
        <div>
        <img
        alt=""
        src={process.env.PUBLIC_URL+"/images/arrow.png"}
        width="60px"
        height="60px"
        className="d-inline-block align-top"
      /> 
        </div>
        
      <p>Keep track of your donations over time!</p>
        </div>
</Col>

</Row>
</div>
</Container>
</>
);
}

export default WelcomeContainer;