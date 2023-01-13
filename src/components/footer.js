import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiAwsamplify, SiGithub } from "react-icons/si";

const Footer = () => {

  return (
    <footer aria-hidden="true">
      <Container>
        <Row>
          <Col xl="8" lg="8" md="8" sm="8" xs="8">
            <p>GitHub Repos for this Demo:<br />
              <a href="https://github.com/binghamchris/aws-expresslink-demo" target="_blank" rel="noreferrer">
                <SiGithub /> AWS IoT ExpressLink Demo Badge & Infrastructure Code
              </a><br />
              <a href="https://github.com/binghamchris/aws-expresslink-demo-webapp" target="_blank" rel="noreferrer">
                <SiGithub /> Device Shadow Web App Code
              </a>
            </p>
          </Col>
          <Col xl="4" lg="4" md="4" sm="4" xs="4" className="text-right">
          <a href={`https://aws.amazon.com/amplify/`} target="_blank" rel="noreferrer">
              Hosted on <SiAwsamplify /> AWS Amplify
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;