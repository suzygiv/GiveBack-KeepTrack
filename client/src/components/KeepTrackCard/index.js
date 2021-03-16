import React from "react";
import Row from "../Row";
import Col from "../Col";
import "./styles.css";

function KeepTrackCard(props) {
  return (
    <div className="keep-track-card">
      <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <div
            className="shadow bg-white rounded"
            style={{
              width: "100%",
              padding: "50px",
              marginTop: "20px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "1.3em",
                  fontWeight: "bold",
                  color: "black",
                  whiteSpace: "nowrap",
                }}
              >
                {props.Organization}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                }}
              >
                ${props.amount}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                }}
              >
                {props.category}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "black",
                }}
              >
                {/* &#9733;
                {props.employeeMatch === true ? " Employee Matched " : ""}
                {props.taxDeductible === true ? " Tax Deductible " : ""}
                {props.receiptDocumentation === true
                  ? " Has Documentation "
                  : ""}
                &#9733; */}

                <div>
                  {props.employeeMatch === true ? "★ Employee Matched ★" : ""}
                </div>
                <div>
                  {" "}
                  {props.taxDeductible === true ? "★ Tax Deductible ★" : ""}
                </div>
                <div>
                  {" "}
                  {props.receiptDocumentation === true
                    ? " ★ Has Documentation ★"
                    : ""}
                </div>
              </div>

              <div>
                <button
                  className="btn btn-secondary custom-btn btn-sm"
                  id="btn-space"
                >
                  Modify
                </button>

                <button className="viewBook btn btn-danger custom-btn btn-sm">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </Col>
        <Col size="md-2"></Col>
      </Row>
    </div>
  );
}

export default KeepTrackCard;
