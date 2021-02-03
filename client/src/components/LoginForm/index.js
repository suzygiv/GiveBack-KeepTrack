import React, { Component } from "react";
import Container from "../Container/index";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class Form extends Component {
    // Setting the component's initial state
    state = {
        email: "",
        password: "",
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
    // handleFormSubmit = event => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();
    //     // this.setState({
    //     //     email: "",
    //     //     password: "",
    //     // });
    //     let email = this.state.email;
    //     let password = this.state.password; 
    //     axios.post("api/login", {email, password}).then(
    //         this.props.history.push("/welcome")
    //     )     
    // };


    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    this.setState({
                        redirectTo: '/welcome'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
            })
    }



    render() {
        // Notice how each input has a value, name, and onChange prop
        return (
            <div>
                <Container>
                    <h1>
                        SIGNUP
                    </h1>
                    <form className="form">
                        <input
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Email"
                        />
                        &nbsp;&nbsp;&nbsp;
                        <input
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
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