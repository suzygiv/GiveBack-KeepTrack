import React from "react";
import Row from "../Row";
import Col from "../Col";
// import GiveBackForm from "../GiveBackForm";
//import routes at some point? before the function for the KeepTrackCard

// if employeeMatch is true, then render "employee match"

function KeepTrackCard(props) {
  
  return (
    <Row>
      <Col size="md-12">
      <div className="shadow bg-white rounded" style={{ maxWidth: "100%", padding: "50px", fontFamily: "Montserrat, SansSerif" }}>
    <div >
      <div >
        {props.Organization}
      </div>
      <div >
        <h5 >{props.amount}</h5>
        <p >{props.category}<br />
        <br />
        &#9733;{
        (props.employeeMatch === true )
        ? " Employee Matched "
        : ""
        }
        {
        (props.taxDeductible === true )
        ? " Tax Deductible "
        : ""
        }
       {
        (props.receiptDocumentation === true )
        ? " Has Documentation " 
        : ""
        }&#9733;
        </p>
      </div>
    </div>
    </div>
      </Col>
    </Row>
    
  );
}

export default KeepTrackCard 