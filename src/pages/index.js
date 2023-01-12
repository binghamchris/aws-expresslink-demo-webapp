import React, { useState, useEffect } from "react";
import Layout from "components/layout";
import { Container, Row } from "react-bootstrap";
import DeviceShadow from "components/device-shadow";
import DeviceView from "components/device-view";

const IndexPage = () => {

  const [urlContent, setUrlContent] = useState(0)

  useEffect(() => {
    
    const timer = setInterval(() => {
      fetch(process.env.SHADOW_READ_API_URL)
      .then( res => res.json() )
      .then( data => {setUrlContent(data)} )
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Layout pageName="index">
      <Container className="page-body">
        <Row>
          <DeviceView shadowJson={urlContent} />
          <DeviceShadow shadowJson={urlContent} />
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
