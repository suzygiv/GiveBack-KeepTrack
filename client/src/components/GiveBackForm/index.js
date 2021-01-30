import React from "react";

function GiveBackForm() {
    return (

    <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Orgnization</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
 
  
</form>

);
}

export default GiveBackForm