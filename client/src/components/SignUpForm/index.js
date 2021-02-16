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
    // handleFormSubmit = event => {
    //     // Preventing the default behavior of the form submit (which is to refresh the page)
    //     event.preventDefault();
    //     // this.setState({
    //     //     email: "",
    //     //     password: "",
    //     // });
    //     let email = this.state.email;
    //     let password = this.state.password; 
    //     axios.post("api/signup", {email, password}).then(
    //         this.props.history.push("/welcome")
    //     )     
    // };

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
                    // this.setState({
                    //     redirectTo: '/login'
                    // })
                    window.location.replace("/");
                } 
            }).catch(error => {
                this.setState({errorMessage: "Your email address and password already exist"});
                console.log(error);
            })
    }

    render() {
        // Notice how each input has a value, name, and onChange prop
        return (

            <div>



                <Container style={{ marginTop: "25vh" }}>
                    <Row>
                        <Col size="lg-6">

                            <p style={{ fontSize: "3.8rem", fontWeight:"bold", whiteSpace: "nowrap", fontFamily: "Montserrat, SansSerif", marginBottom: "-35px", marginTop: "50px", textShadow: "2px 5px 4px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}><span style={{ color: "#80CDDF" }}>give</span>back </p>
                            <p style={{ fontSize: "4.0rem", fontWeight:"bold", whiteSpace: "nowrap", fontFamily: "Montserrat, sansSerif", marginBottom: "20px", textShadow: "2px 5px 4px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)" }}>keep<span style={{ color: "#80CDDF" }}>track</span> </p>


                        </Col>

                        <Col size="lg-6">
                            <div className="shadow bg-white rounded" style={{ maxWidth: "100%", padding: "50px", opacity: "1" }}>
                                {/* <div><img
                                    alt=""
                                    src={process.env.PUBLIC_URL + "/images/logo.png"}
                                    width="60px"
                                    height="60px"
                                    className="d-inline-block align-top"
                                />
                                </div> */}
                                <h3 style={{ textAlign: "center", marginBottom: "20px", fontFamily: "Source Sans Pro, sansSerif" }}>Sign Up</h3>

                                <form className="form">
                    <div style={{textAlign: "center"}}>
                        <input style={{marginBottom: "20px"}}
                            value={this.state.email}
                            name="email"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Email"
                        />
                        </div>
                        <div style={{textAlign: "center"}}>
                        <input style={{marginBottom: "20px"}}
                       
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInputChange}
                            type="password"
                            placeholder="Password"
                        />
                        </div>
                        <div style={{textAlign: "center"}}>
                        < Button className="btn-primary custom-btn" style={{ margin: "5px", marginBottom: "20px" }} variant="dark" onClick={this.handleSubmit}>Sign Up</Button>
                        < Button className="btn-secondary custom-btn" style={{ margin: "5px", marginBottom: "20px" }} variant="dark" href="/">Login</Button>
                        </div>
                    </form>
                    <Modal
                        show={Boolean(this.state.errorMessage)}
                        onHide={() => this.setState({errorMessage: ""})}
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
                        <Button className="btn-secondary custom-btn" variant="secondary" onClick={() => this.setState({errorMessage: ""})}>
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
