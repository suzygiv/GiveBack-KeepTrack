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



                <Container style={{ marginTop: "25vh" }}>
                    <Row>
                        <Col size="lg-6">

                            <p style={{ fontSize: "3.8rem", fontWeight: "bold", whiteSpace: "nowrap", fontFamily: "Montserrat, SansSerif", marginBottom: "-35px", marginTop: "50px", textShadow: "2px 5px 4px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}><span style={{ color: "#80CDDF" }}>give</span>back </p>
                            <p style={{ fontSize: "4.0rem", fontWeight: "bold", whiteSpace: "nowrap", fontFamily: "Montserrat, sansSerif", marginBottom: "20px", textShadow: "2px 5px 4px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>keep<span style={{ color: "#80CDDF" }}>track</span> </p>


                        </Col>

                        <Col size="lg-6">
                            <div className="shadow bg-white rounded" style={{ maxWidth: "100%", padding: "50px" }}>
                                <h3 style={{ textAlign: "center", marginBottom: "20px", fontFamily: "Source Sans Pro, sansSerif" }}>Login</h3>

                                <form>
                                    <div style={{ textAlign: "center" }}>
                                        <input style={{ marginBottom: "20px" }}
                                            value={this.state.email}
                                            name="email"
                                            onChange={this.handleInputChange}
                                            type="text"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <input style={{ marginBottom: "20px" }}
                                            value={this.state.password}
                                            name="password"
                                            onChange={this.handleInputChange}
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        < Button className="btn-primary custom-btn" style={{ margin: "5px", marginBottom: "20px" }} onClick={this.handleSubmit}>Login</Button>
                                        < Button className="btn-secondary custom-btn" style={{ margin: "5px", marginBottom: "20px" }} href="/signup">Sign Up</Button>
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

