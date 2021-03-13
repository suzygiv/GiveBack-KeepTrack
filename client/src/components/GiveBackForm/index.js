import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Confetti from "../Confetti";
import "./style.css";

class GiveBackForm extends Component {
  // Setting the component's initial state
  state = {
    Organization: "",
    category: "",
    employeeMatch: false,
    taxDeductible: false,
    receiptDocumentation: false,
    amount: "",
    playConfetti: false,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(value);
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("give-back-form, Organization:");
    console.log(this.state.Organization);
    axios
      .post("/api/submissiondb/giveback", {
        Organization: this.state.Organization,
        category: this.state.category,
        employeeMatch: this.state.employeeMatch,
        taxDeductible: this.state.taxDeductible,
        receiptDocumentation: this.state.receiptDocumentation,
        amount: this.state.amount,
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
          console.log("successful submission");
          this.setState({ playConfetti: true });
          setTimeout(function () {
            window.location.replace("/welcome");
          }, 5000);
        } else {
          console.log("Submission error");
        }
      })
      .catch((error) => {
        console.log("Submission server error: ");
        console.log(error);
      });
  };

  render() {
    return (
      <Container
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <Confetti run={this.state.playConfetti} />
        <Row>
          <div
            className="shadow bg-white rounded"
            style={{ maxWidth: "100%", padding: "50px" }}
          >
            <Col size="sm-12">
              <h1>Give Back</h1>
            </Col>

            <Col size="sm-12">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Organization</label>
                  <input
                    className="form-control"
                    value={this.state.Organization}
                    name="Organization"
                    type="text"
                    id="exampleFormControlInput1"
                    placeholder="e.g. Cancer Research Institute"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Category</label>
                  <select
                    className="form-control"
                    onChange={this.handleInputChange}
                    name="category"
                    id="exampleFormControlSelect1"
                  >
                    <option value="ArtCulture"> Art &#38; Culture</option>
                    <option value="Education"> Education</option>
                    <option value="Environment"> Environment</option>
                    <option value="HealthMedical"> Health &#38; Medical</option>
                    <option value="AnimalHumane"> Animal &#38; Humane</option>
                  </select>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="checkbox-margin"
                    type="checkbox"
                    id="employeeMatch"
                    name="employeeMatch"
                    onChange={this.handleInputChange}
                    checked={this.state.employeeMatch}
                  />
                  <label className="form-check-label" for="inlineCheckbox1">
                    Employee Match
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="checkbox-margin"
                    type="checkbox"
                    id="taxDeductible"
                    name="taxDeductible"
                    onChange={this.handleInputChange}
                    checked={this.state.taxDeductible}
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    Tax Deductible
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="checkbox-margin"
                    type="checkbox"
                    id="receiptDocumentation"
                    name="receiptDocumentation"
                    onChange={this.handleInputChange}
                    checked={this.state.receiptDocumentation}
                  />
                  <label className="form-check-label" for="inlineCheckbox3">
                    Receipt &#38; Documentation
                  </label>
                </div>
                <div className="form-group">
                  <label className="amount-margin">Amount</label>
                  <input
                    className="form-control"
                    value={this.state.amount}
                    name="amount"
                    type="number"
                    id="exampleFormControlInput1"
                    placeholder=""
                    onChange={this.handleInputChange}
                  />
                </div>
                <Button
                  className="btn-primary custom-btn"
                  variant="primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </form>
            </Col>
          </div>
        </Row>
      </Container>
    );
  }
}
export default GiveBackForm;
