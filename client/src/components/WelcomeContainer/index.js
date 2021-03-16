import React from "react";
import { Link } from "react-router-dom";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import "./styles.css";

function WelcomeContainer() {
  return (
    <>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "70px",
          marginTop: "20px",
        }}
      >
        {/* <div className="shadow bg-white rounded" style={{ maxWidth: "100%", padding: "50px"}}> */}
        <div>
          <Row>
            <Col size="md-12">
              <div>
                <p className="gbkt-title" id="give">
                  <span className="give-span">give</span>back{" "}
                </p>
                <p className="gbkt-title" id="keep">
                  keep<span className="track-span">track</span>{" "}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <div>
                <p className="welcome-font">
                  Welcome{" "}
                  <span id="email-welcome">
                    {sessionStorage.getItem("email")}
                  </span>
                  ! You've donated{" "}
                  <span id="amount-welcome">
                    ${sessionStorage.getItem("sumTotal")}{" "}
                  </span>{" "}
                  so far. Great job!
                </p>
                <p className="welcome-font"> What would you like to do?</p>
                <div>
                  <Link to="/givebackentry">
                    <button
                      className="btn btn-primary custom-btn"
                      id="btn-space"
                    >
                      Give Back
                    </button>
                  </Link>

                  <Link to="/keeptrack">
                    <button className="viewBook btn btn-success custom-btn">
                      Keep Track
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          padding: "50px",
          paddingBottom: "50vh",
          backgroundColor: "#50BCD5",
          maxWidth: "100%",
          margin: "0 auto",
          fontFamily: "Montserrat, SansSerif",
        }}
      >
        <div>
          <Row>
            <Col size="md-4">
              <div className="bottom-welcome-icons">
                <div>
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/handu.png"}
                    width="60px"
                    height="60px"
                    className="d-inline-block align-top"
                  />
                </div>

                <p>Enter the name of the organization you’ve donated to.</p>
              </div>
            </Col>
            <Col size="md-4">
              <div className="bottom-welcome-icons">
                <img
                  alt=""
                  src={process.env.PUBLIC_URL + "/images/dollarsign.png"}
                  width="60px"
                  height="60px"
                  className="d-inline-block align-top"
                />

                <p>Enter your donation amount and other details.</p>
              </div>
            </Col>
            <Col size="md-4">
              <div className="bottom-welcome-icons">
                <div>
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "/images/arrow.png"}
                    width="60px"
                    height="60px"
                    className="d-inline-block align-top"
                  />
                </div>

                <p>Keep track of your donations over time!</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default WelcomeContainer;
