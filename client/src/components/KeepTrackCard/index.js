import React from "react";
// import GiveBackForm from "../GiveBackForm";
//import routes at some point? before the function for the KeepTrackCard

// if employeeMatch is true, then render "employee match"

function KeepTrackCard(props) {
  return (
    <div className="card mb-4 text-center">
      <div className="card-header">
        {props.Organization}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.amount}</h5>
        <p className="card-text">{props.category}<br />
        <br />
        {
        (props.employeeMatch === true )
        ? " Employee Matched "
        : ""
        }
        &#9733;{
        (props.taxDeductible === true )
        ? " Tax Deductible "
        : ""
        }
        &#9733;{
        (props.receiptDocumentation === true )
        ? " Has Documentation " 
        : ""
        }
        </p>
      </div>
    </div>
  );
}

export default KeepTrackCard 