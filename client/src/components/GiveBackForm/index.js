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
      category: "",
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
  console.log(value)
  console.log(name)
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
      category: this.state.category,
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
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Organization</label>
                <input className="form-control" 
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
                <select className="form-control" onChange={this.handleInputChange} name="category" id="exampleFormControlSelect1">
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
                <label>Amount</label>
                <input className="form-control" 
                value={this.state.Amount} 
                name="Amount" 
                type="number" 
                id="exampleFormControlInput1" 
                placeholder=""
                onChange={this.handleInputChange}
                />
              </div>
                <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>


            </form>
          </Col>
        </Row>
      </Container>
);
}
}
export default GiveBackForm;