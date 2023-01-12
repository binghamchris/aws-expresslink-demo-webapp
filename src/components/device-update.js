import React from "react";
import { Col } from "react-bootstrap";

const DeviceUpdate = () => {  

  function updateShadow(e, config_number) {
    e.preventDefault();
    console.log("Update Func " + config_number);
    const req_body = {
      "active_button_config": config_number
    }
    const opts = {
      method: 'POST',
      body: JSON.stringify(req_body),
    };
    fetch(process.env.UPDATE_SHADOW_ENDPOINT, opts)
  }
  
  return (
    <>
      <Col>
        <button onClick={(e) => updateShadow(e, 1)}>1</button>
      </Col>
      <Col>
        <button onClick={(e) => updateShadow(e, 2)}>2</button>
      </Col>
      <Col>
        <button onClick={(e) => updateShadow(e, 3)}>3</button>
      </Col>
        
    </>
  )
}

export default DeviceUpdate;