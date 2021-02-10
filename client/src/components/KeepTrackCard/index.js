import React from "react";
// import GiveBackForm from "../GiveBackForm";
//import routes at some point? before the function for the KeepTrackCard



function KeepTrackCard(props) {
  return (
    <div className="card mb-4 text-center">
      <div className="card-header">
        {props.Organization}
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.Amount}</h5>
        <p className="card-text">{props.Amount}<br />
        </p>
      </div>
    </div>
  );
}

export default KeepTrackCard 