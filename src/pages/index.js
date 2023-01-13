import React from "react";
import Layout from "components/layout";
import { Container } from "react-bootstrap";
import DeviceShadow from "components/device-shadow";
import DeviceUpdate from "components/device-update";
import { useSiteMetadata } from "hooks/use-site-metadata";

const IndexPage = () => {
  return (
    <Layout pageName="index">
      <Container className="page-body">
        <DeviceUpdate />
        <DeviceShadow />
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => {

  const { title } = useSiteMetadata()

  return (
    <title>{title}</title>
  )
}
