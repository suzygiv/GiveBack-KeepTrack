import React, { Component } from "react";
import Container from "../Container/index";
import Button from 'react-bootstrap/Button';
class Form extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
    };
    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
        });
    };
    render() {
        // Notice how each input has a value, name, and onChange prop
        return (
            <div>
                <Container>
                    <h1>
                        LOGIN
          </h1>
                    <form className="form">
                        <input
                            value={this.state.firstName}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Email"
                        />
            &nbsp;&nbsp;&nbsp;
            <input
                            value={this.state.lastName}
                            name="password"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Password"
                        />
                        <Button variant="dark" onClick={this.handleFormSubmit}>Submit</Button>
                    </form>
                </Container>
            </div>
        );
    }
}
export default Form;

//we'll need to add a checkbox option here later