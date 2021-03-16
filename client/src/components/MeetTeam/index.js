import React from "react";
import Row from "../Row";
import Col from "../Col";
import "./styles.css";

function MeetTeam() {
  return (
    <section id="meet-team">
      <h1>Meet the Team</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Row>
        <Col size="md-4">
          <div className="team-imgs">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/Suzy.png"}
              width="260px"
              height="260px"
              className="d-inline-block align-top"
            />
            <h4 className="team-names">Suzanne Givnish</h4>
          </div>
          <div>
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/email-icon.png"}
              width="30px"
              height="30px"
              className="d-inline-block align-top contact-icons"
            />

            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/github-icon.png"}
              width="30px"
              height="30px"
              className="d-inline-block align-top contact-icons"
            />

            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/linkedin-icon.png"}
              width="30px"
              height="30px"
              className="d-inline-block align-top contact-icons"
            />

            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/portfolio-icon.png"}
              width="30px"
              height="30px"
              className="d-inline-block align-top contact-icons"
            />
          </div>
        </Col>

        <Col size="md-4">
          {" "}
          <div className="team-imgs">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/Alison.jpg"}
              width="260px"
              height="260px"
              className="d-inline-block align-top"
            />
            <h4 className="team-names">Alison Lubar</h4>
            <div>
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/email-icon.png"}
                width="30px"
                height="30px"
                className="d-inline-block align-top contact-icons"
              />

              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/github-icon.png"}
                width="30px"
                height="30px"
                className="d-inline-block align-top contact-icons"
              />

              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/linkedin-icon.png"}
                width="30px"
                height="30px"
                className="d-inline-block align-top contact-icons"
              />

              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/portfolio-icon.png"}
                width="30px"
                height="30px"
                className="d-inline-block align-top contact-icons"
              />
            </div>
          </div>
        </Col>
        <Col size="md-4">
          <div className="team-imgs">
            <img
              alt=""
              src={process.env.PUBLIC_URL + "/images/Alex.jpg"}
              width="260px"
              height="260px"
              className="d-inline-block align-top"
            />
            <h4 className="team-names">Alexandra Hionis</h4>
            <div>
              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/email-icon.png"}
                width="30px"
                height="30px"
                className="d-inline-block align-top contact-icons "
              />

              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/github-icon.png"}
                width="30px"
                height="30px"
                className="d-inline-block align-top contact-icons"
              />

              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/linkedin-icon.png"}
                width="30px"
                height="30px"
                className="d-inline-block align-top contact-icons"
              />

              <img
                alt=""
                src={process.env.PUBLIC_URL + "/images/portfolio-icon.png"}
                width="30px"
                height="30px"
                className="d-inline-block align-top contact-icons"
              />
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default MeetTeam;
