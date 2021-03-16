import React from "react";
import Row from "../Row";
import Col from "../Col";
import { Link } from "react-router-dom";
import "./styles.css";

function HomePageContainer() {
  return (
    <section id="home">
      <div>
        <Row>
          <Col size="md-6">
            <div>
              <div id="gbkt-main-header">
                <p className="gbkt-title" id="give-spacing">
                  <span className="give-span">give</span>back{" "}
                </p>
                <p className="gbkt-title" id="keep">
                  keep<span className="track-span">track</span>{" "}
                </p>
              </div>
              <div id="gbkt-title-div">
                <h1 id="home-header">Keep track of your donations.</h1>
                <h4 className="home-header-subfont">
                  Take control of your donations for tax season, to stay
                  organized or just for fun!
                </h4>
              </div>
              <br></br>
              <div>
                <h4 className="home-header-subfont">Get started</h4>
                <div>
                  <Link to="/login">
                    <button
                      className="btn btn-primary custom-btn"
                      id="btn-space"
                    >
                      Login
                    </button>
                  </Link>

                  <Link to="/signup">
                    <button className="viewBook btn btn-success custom-btn">
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col size="md-6">
            <div id="phone-img">
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/iphone.png"}
                width="85%"
                height="auto"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default HomePageContainer;
