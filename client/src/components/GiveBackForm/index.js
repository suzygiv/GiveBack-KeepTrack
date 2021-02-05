import React from "react";
import Row from "../Row"
import Col from "../Col"
import Container from "../Container"
function GiveBackForm() {
    return (
<Container style={{border: "black 2px solid", marginTop: "50px", padding: "50px"}}>
  <Row>
        <Col size="sm-12">
          <h1>Give Back</h1>
          </Col>
          </Row>
      <Row>
        <Col size="sm-12">
    <form>
  <div className="form-group">
    <label for="exampleFormControlInput1" style={{margin: "5px"}}>Orgnization</label>
    <input className="form-control" type="text" placeholder="e.g. Cancer Research Institute" />
   </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Category</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Select a Category</option>
      <option>Arts &#38; Culture</option>
      <option>Education</option>
      <option>Environment</option>
      <option>Health &#38; Medical</option>
      <option>Animal &#38; Humane</option>
    </select>
</div>
    <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
  <label class="form-check-label" for="inlineCheckbox1">Employee Match</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
  <label class="form-check-label" for="inlineCheckbox2">Tax Deductible</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
  <label class="form-check-label" for="inlineCheckbox3">Receipt &#38; Documentation</label>
</div>
<div className="form-group">
    <label for="exampleFormControlInput1" style={{margin: "5px"}}>Amount</label>
    <input className="form-control" type="text" placeholder="e.g. $50" />
   </div>
   <button type="submit" className="btn btn-primary">Add</button>

</form>
</Col>
</Row>
</Container>
);
}

export default GiveBackForm