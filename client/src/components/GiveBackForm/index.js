import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import Button from 'react-bootstrap/Button';
import axios from "axios";

class GiveBackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {defaultValue: ""};
  }
  // Setting the component's initial state
  state = {
      Organization: "",
      ArtCulture: "",
      Education: "",
      Environment: "",
      HealthMedical: "",
      AnimalHumane: "",
      employeeMatch: false,
      taxDeductible: false,
      receiptDocumentation: false,
      Amount: "",
  };


  handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
  //     let value = event.target.value;
  //     const name = event.target.name;
  //     // Updating the input's state
  //     this.setState({
  //         [name]: value
  //     });
  // }
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value
  });
}

handleSubmit = (event) => {
  event.preventDefault()
  console.log('give-back-form, Organization:');
  console.log(this.state.Organization);
  axios.post('/api/submissiondb/giveback', {
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
                <label>Organization
                <input className="form-control" 
                value={this.state.Organization} 
                name="Organization" 
                type="text" 
                id="exampleFormControlInput1" 
                placeholder="e.g. Cancer Research Institute"
                onChange={this.handleInputChange}
                /></label>
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
                <input
                    type="checkbox"
                    id="employeeMatch"
                    name="employeeMatch"
                    onChange={this.handleInputChange}
                    checked={this.state.employeeMatch}
                  />
                <label className="form-check-label" for="inlineCheckbox1">Employee Match</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                    type="checkbox"
                    id="taxDeductible"
                    name="taxDeductible"
                    onChange={this.handleInputChange}
                    checked={this.state.taxDeductible}
                  />
                <label className="form-check-label" for="inlineCheckbox2">Tax Deductible</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                    type="checkbox"
                    id="receiptDocumentation"
                    name="receiptDocumentation"
                    onChange={this.handleInputChange}
                    checked={this.state.receiptDocumentation}
                  />
                <label className="form-check-label" for="inlineCheckbox3">Receipt &#38; Documentation</label>
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1" style={{ margin: "5px" }}>Amount</label>
                <input
                  value={this.state.Amount}
                  name="Amount"
                  onChange={this.handleInputChange}
                  type="number"
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