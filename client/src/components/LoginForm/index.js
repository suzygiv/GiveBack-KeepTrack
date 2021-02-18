import React, { Component } from "react";
import Container from "../Container/index";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Row from "../Row";
import Col from "../Col";
import "./styles.css";

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

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        axios.post('/api/auth/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    console.log('hi');
                    sessionStorage.setItem("email", this.state.email)
                    window.location.replace("/welcome");
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
            })
    }



    render() {
        return (

            <div>



                <Container style={{ marginTop: "7vh" }}>
                    <Row>
                        <Col size="lg-6">

                            <p className="gbkt-title" id="give"><span className="give-span">give</span>back </p>
                            <p className="gbkt-title" id="keep">keep<span className="track-span">track</span> </p>


                        </Col>

                        <Col size="lg-6">
                            <div className="shadow bg-white rounded" id="login-div">
                                <h3 className="login-signup">Login</h3>

                                <form>
                                    <div>
                                        <input className="input-form-margin"
                                            value={this.state.email}
                                            name="email"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <input className="input-form-margin"
                                            value={this.state.password}
                                            name="password"
                                            onChange={this.handleInputChange}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div>
                                        < Button className="btn-primary custom-btn login-signup-btns" onClick={this.handleSubmit}>Login</Button>
                                        < Button className="btn-secondary custom-btn login-signup-btns" href="/signup">Sign Up</Button>
                                    </div>
                                </form>
                            </div>
                        </Col>
                    </Row>



                </Container>
            </div>
        );
    }

}
export default Form;

