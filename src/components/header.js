import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const Header = () => {

  const { title } = useSiteMetadata()

  return (
    <header className="sticky-xl-top sticky-lg-top">
      <Container fluid="true">
        <Row className="justify-content-center g-0 header">
          <Col>
            <Navbar variant="dark" expand="lg" id="site-navbar">
              <Navbar.Brand as="span">
                <h1>{title}</h1>
              </Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;



