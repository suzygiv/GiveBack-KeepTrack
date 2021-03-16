import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import Row from "../Row";
import Col from "../Col";

import "./styles.css";

function HomePageContainerSection2() {
  return (
    <section id="steps">
      <Row>
        <Col size="md-2"></Col>
        <Col size="md-8">
          <div className="home-icons">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/account.png"}
              width="18%"
              height="auto"
            />
          </div>
          <p className="home-steps-style">
            1) Create an account by signing up! Afterwards, simply log in to
            access your account.
          </p>

          <div className="home-icons">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/form-icon.png"}
              width="18%"
              height="auto"
            />
          </div>
          <p className="home-steps-style">
            2) Fill out the donation entry form. This allows you to include the
            amount, the organization you donated to, and whether it is employee
            matched, tax deductible, or provides proof of documentation.
          </p>
          <div className="home-icons">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/piechart.png"}
              width="18%"
              height="auto"
            />
          </div>
          <p className="home-steps-style">
            3) Keep track of your donations easily! You'll be able to visualize
            how much you've donated to specific organizations with a pie chart.
          </p>
          <Col size="md-2"></Col>
        </Col>
      </Row>
    </section>
  );
}

export default HomePageContainerSection2;
