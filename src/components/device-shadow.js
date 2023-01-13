import React, { useState, useEffect }  from "react";
import { Col, Row } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const DeviceShadow = () => {

  const [shadowJson, setshadowJson] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Fetching latest device shadow...")
      fetch(process.env.GATSBY_GET_SHADOW_ENDPOINT)
      .then( res => res.json() )
      .then( data => {setshadowJson(data)} )
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  if (shadowJson) {

    var active_colour
    var active_url
    switch( Number(shadowJson.active_button_config)) {
      case 1:
        active_colour = shadowJson.buttons_config.button_1[1];
        active_url = shadowJson.buttons_config.button_1[0];
        break;
      case 2:
        active_colour = shadowJson.buttons_config.button_2[1];
        active_url = shadowJson.buttons_config.button_2[0];
        break;
      case 3:
        active_colour = shadowJson.buttons_config.button_3[1];
        active_url = shadowJson.buttons_config.button_3[0];
        break;
      default:
        break;
    }

    var btn1_class
    var btn2_class
    var btn3_class
    switch( Number(shadowJson.active_button_config)) {
      case 1:
        btn1_class = "active-config"
        btn2_class = ""
        btn3_class = ""
        break;
      case 2:
        btn1_class = ""
        btn2_class = "active-config"
        btn3_class = ""
        break;
      case 3:
        btn1_class = ""
        btn2_class = ""
        btn3_class = "active-config"
        break;
      default:
        break;
    }

    const background_style = {
      backgroundColor: "rgb(" + active_colour[0] + ", " + active_colour[1] + ", " + active_colour[2] + ")"
    }

    return (
      <Row id="device-shadow">
        <h2>Current Shadow</h2>
        <p>This section shows the latest <code>reported</code> shadow, as sent by the demo badge and recorded in AWS IoT Core:</p>
        <Col id="device-shadow-view" style={background_style} className="text-center">
          <div id="device-shadow-view-content">
            <StaticImage src="../assets/images/ExpressLink_2048px.png" />
            <span>
              <a href={active_url} target="_blank" rel="noreferrer">{active_url}</a>
            </span>
          </div>
        </Col>
        <Col id="device-shadow-readings">
          <h3>Button Configuration</h3>
          <h4>Button 1</h4>
          <table className={btn1_class}>
            <tbody>
              <tr>
                <th>URL</th>
                <td>
                  <a href={shadowJson.buttons_config.button_1[0]} target="_blank" rel="noreferrer">
                    {shadowJson.buttons_config.button_1[0]}
                  </a>
                </td>
              </tr>
              <tr>
                <th>LED Colour</th>
                <td>
                  RGB(
                    {shadowJson.buttons_config.button_1[1][0]}, 
                    {shadowJson.buttons_config.button_1[1][1]}, 
                    {shadowJson.buttons_config.button_1[1][2]}
                  )
                </td>
              </tr>
            </tbody>
          </table>
          <h4>Button 2</h4>
          <table  className={btn2_class}>
            <tbody>
              <tr>
                <th>URL</th>
                <td>
                  <a href={shadowJson.buttons_config.button_2[0]} target="_blank" rel="noreferrer">
                    {shadowJson.buttons_config.button_2[0]}
                  </a>
                </td>
              </tr>
              <tr>
                <th>LED Colour</th>
                <td>
                  RGB(
                    {shadowJson.buttons_config.button_2[1][0]},
                    {shadowJson.buttons_config.button_2[1][1]},
                    {shadowJson.buttons_config.button_2[1][2]}
                  )
                </td>
              </tr>
            </tbody>
          </table>
          <h4>Button 3</h4>
          <table className={btn3_class}>
            <tbody>
              <tr>
                <th>URL</th>
                <td>
                  <a href={shadowJson.buttons_config.button_3[0]} target="_blank" rel="noreferrer">
                    {shadowJson.buttons_config.button_3[0]}
                  </a>
                </td>
              </tr>
              <tr>
                <th>LED Colour</th>
                <td>
                  RGB(
                    {shadowJson.buttons_config.button_3[1][0]},
                    {shadowJson.buttons_config.button_3[1][1]},
                    {shadowJson.buttons_config.button_3[1][2]}
                  )
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Sensors</h3>
          <table>
            <tbody>
              <tr>
                <th>Temperature</th>
                <td>{Number(shadowJson.temperature).toFixed(2)} &#176;C</td>
              </tr>
              <tr>
                <th>Humidity</th>
                <td>{Number(shadowJson.humidity).toFixed(2)}%</td>
              </tr>
              <tr>
                <th>Ambient Light</th>
                <td>{shadowJson.ambient_light}</td>
              </tr>
            </tbody>
          </table>
          <h4>Accelerometers</h4>
          <table>
            <tbody>
              <tr>
                <th>x Axis</th>
                <td>{shadowJson.acceleration_x}</td>
              </tr>
              <tr>
                <th>y Axis</th>
                <td>{shadowJson.acceleration_y}</td>
              </tr>
              <tr>
                <th>z Axis</th>
                <td>{shadowJson.acceleration_z}</td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    )
  } else {
    return (
      <Row id="device-shadow">
        <Col>
          <h2>Current Shadow</h2>
          <p>The device shadow is being fetched, please wait...</p>
        </Col>
      </Row>
    )
  }
}
export default DeviceShadow;