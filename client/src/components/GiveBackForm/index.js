import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import Button from 'react-bootstrap/Button';
import axios from "axios";

class GiveBackForm extends Component {
  // Setting the component's initial state
  state = {
      Organization: "",
      ArtCulture: "",
      Education: "",
      Environment: "",
      HealthMedical: "",
      AnimalHumane: "",
      employeeMatch: "",
      taxDeductible: "",
      receiptDocumentation: "",
      Amount: ""
  };
 

  handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
      // Updating the input's state
      this.setState({
          [name]: value
      });
  }

handleSubmit = (event) => {
  event.preventDefault()
  console.log('give-back-form, Organization:');
  console.log(this.state.Organization);
  axios.post('/api/giveback/', {
      Organization: this.state.Organization,
      ArtCulture: this.state.ArtCulture,
      Education: this.state.Education,
      Environment: this.state.Environment,
      HealthMedical: this.state.HealthMedical,
      AnimalHumane: this.state.AnimalHumane,
      employeeMatch: this.state.employeeMatch,
      taxDeductible: this.state.taxDeductible,
      receiptDocumentation: this.state.receiptDocumentation,
      Amount: this.state.Amount
  })
      .then(response => {
          console.log(response)
          if (response.data) {
              console.log('successful submission')
              // this.setState({
              //     redirectTo: '/login'
              // })
              window.location.replace("/welcome");
              // add confetti npm when successfully submitted
          } else {
              console.log('Submission error');
          }
      }).catch(error => {
          console.log('Submission server error: ')
          console.log(error);
      })
}


  render() {
    return (
      <Container style={{ border: "black 2px solid", marginTop: "50px", padding: "50px" }}>
        <Row>
          <Col size="sm-12">
            <h1>Give Back</h1>
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Organization</label>
                <input className="form-control" type="text" placeholder="e.g. Cancer Research Institute" defaultValue={this.state.Organization} />
              </div>
              <div className="form-group">
                <label for="exampleFormControlSelect1">Category</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value="ArtCulture"> Art &#38; Culture</option>
                  <option value="Education"> Education</option>
                  <option value="Environment"> Environment</option>
                  <option value="HealthMedical"> Health &#38; Medical</option>
                  <option value="AnimalHumane"> Animal &#38; Humane</option>
                </select>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={this.state.employeeMatch} />
                <label className="form-check-label" for="inlineCheckbox1">Employee Match</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value={this.state.taxDeductible} />
                <label className="form-check-label" for="inlineCheckbox2">Tax Deductible</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value={this.state.receiptDocumentation} />
                <label className="form-check-label" for="inlineCheckbox3">Receipt &#38; Documentation</label>
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1" style={{ margin: "5px" }}>Amount</label>
                <input
                  value={this.state.Amount}
                  name="Amount"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Amount" />
                <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
              </div>

            </form>
          </Col>
        </Row>
      </Container>
);
}
}
export default GiveBackForm;