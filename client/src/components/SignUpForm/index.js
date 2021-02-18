import React, { Component } from "react";
import Container from "../Container/index";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Row from "../Row";
import Col from "../Col";
import "./styles.css";

class Form extends Component {
    // Setting the component's initial state
    state = {
        email: "",
        password: "",
        errorMessage: ""
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

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('sign-up-form, email:');
        console.log(this.state.email);
        axios.post('/api/auth/signup', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (response.data) {
                    console.log('successful signup')
                    window.location.replace("/");
                }
            }).catch(error => {
                this.setState({ errorMessage: "Your email address and password already exist" });
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
                        <div className="shadow bg-white rounded" id="signup-div">
                            <h3 className="login-signup">Signup</h3>
                                <form className="form">
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
                                        < Button className="btn-primary custom-btn login-signup-btns" variant="dark" onClick={this.handleSubmit}>Sign Up</Button>
                                        < Button className="btn-secondary custom-btn login-signup-btns" variant="dark" href="/">Login</Button>
                                    </div>
                                </form>
                                <Modal
                                    show={Boolean(this.state.errorMessage)}
                                    onHide={() => this.setState({ errorMessage: "" })}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title>ERROR</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        {this.state.errorMessage}
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button className="btn-secondary custom-btn" variant="secondary" onClick={() => this.setState({ errorMessage: "" })}>
                                            Close
                                        </Button>
                                        <Button className="btn-primary custom-btn" variant="primary" a href="/">Login</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}
export default Form;
