import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {

  return (
    <footer aria-hidden="true">
      <Container>
        <Row>
          <Col>
            <p>Demo Repos:<br />
              <a href="https://github.com/binghamchris/aws-expresslink-demo" target="_blank" rel="noreferrer">
                AWS IoT ExpressLink Demo Badge & Infrastructure Code
              </a><br />
              <a href="https://github.com/binghamchris/aws-expresslink-demo-webapp" target="_blank" rel="noreferrer">
                Device Shadow Web App Code
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      
    </footer>
  )
};

export default Footer;