import React from "react";
import Layout from "components/layout";
import { Container, Row, Col } from "react-bootstrap";
import DeviceShadow from "components/device-shadow";
import DeviceUpdate from "components/device-update";

const IndexPage = () => {
  return (
    <Layout pageName="index">
      <Container className="page-body">
        <Row>
          <DeviceUpdate />
        </Row>
        <Row>
          <DeviceShadow />
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
