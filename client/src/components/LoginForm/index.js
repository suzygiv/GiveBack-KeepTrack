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
                    // this.props.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    // this.setState({
                    //     redirectTo: '/welcome'
                    // })
                    window.location.replace("/welcome");
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



                <Container style={{ marginTop: "50px" }}>
                    <Row>
                        <Col size="lg-6">

                            <p style={{ fontSize: "3.8rem", whiteSpace: "nowrap", fontFamily: "Montserrat, SansSerif", marginBottom: "-35px", marginTop: "50px", textShadow: "2px 5px 4px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}><span style={{ color: "#80CDDF" }}>give</span>back </p>
                            <p style={{ fontSize: "4.0rem", whiteSpace: "nowrap", fontFamily: "Montserrat, sansSerif", marginBottom: "20px", textShadow: "2px 5px 4px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>keep<span style={{ color: "#80CDDF" }}>track</span> </p>


                        </Col>

                        <Col size="lg-6">
                            <div className="shadow bg-white rounded" style={{ maxWidth: "100%", padding: "50px", opacity: "1" }}>
                                <div><img
                                    alt=""
                                    src={process.env.PUBLIC_URL + "/images/logo.png"}
                                    width="60px"
                                    height="60px"
                                    className="d-inline-block align-top"
                                />
                                </div>
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
                                        < Button className="btn-primary custom-btn" style={{ marginBottom: "20px" }} onClick={this.handleSubmit}>Submit</Button>
                                        < Button className="btn-primary custom-btn" style={{ marginBottom: "20px" }} href="/signup">Sign Up</Button>
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

//we'll need to add a checkbox option here later