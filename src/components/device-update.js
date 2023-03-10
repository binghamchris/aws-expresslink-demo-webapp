import React from "react";
import { Col, Row } from "react-bootstrap";

const DeviceUpdate = () => {  

  function updateShadow(e, config_number) {
    e.preventDefault();
    const req_body = {
      "active_button_config": config_number
    }
    const opts = {
      method: 'POST',
      body: JSON.stringify(req_body),
    };
    console.log("Sending new desired shadow state...")
    fetch(process.env.GATSBY_UPDATE_SHADOW_ENDPOINT, opts)
  }
  
  return (
    <Row id="device-update">
      <h2>Change Active Button</h2>
      <p>Select which button config to make active. This publishes a <code>desired state</code> message on the demo badges <code>update</code> MQTT topic:</p>
      <Col className="text-center">
        <button onClick={(e) => updateShadow(e, 1)}>Button 1</button>
      </Col>
      <Col className="text-center">
        <button onClick={(e) => updateShadow(e, 2)}>Button 2</button>
      </Col>
      <Col className="text-center">
        <button onClick={(e) => updateShadow(e, 3)}>Button 3</button>
      </Col>
    </Row>
  )
}

export default DeviceUpdate;