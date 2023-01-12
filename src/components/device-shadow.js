import React from "react";
import { Col } from "react-bootstrap";

const DeviceShadow = ({ shadowJson }) => {
  if (shadowJson) {

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

    return (
      <>
        <Col id="device-shadow">
          <h2>Button Configuration</h2>
          <h3>Button 1</h3>
          <table className={btn1_class}>
            <tbody>
              <tr>
                <th>URL</th>
                <td>
                  <a href={shadowJson.buttons_config.button_1[0]}>
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
          <h3>Button 2</h3>
          <table  className={btn2_class}>
            <tbody>
              <tr>
                <th>URL</th>
                <td>
                  <a href={shadowJson.buttons_config.button_2[0]}>
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
          <h3>Button 3</h3>
          <table className={btn3_class}>
            <tbody>
              <tr>
                <th>URL</th>
                <td>
                  <a href={shadowJson.buttons_config.button_3[0]}>
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
          <h2>Sensors</h2>
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
          <h3>Accelerometers</h3>
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
      </>
    )
  } else {
    return (
      <>
        <Col id="device-shadow">
          <h2>Current Shadow</h2>
          <p>The device shadow is being fetched, please wait...</p>
        </Col>
      </>
    )
  }
}
export default DeviceShadow;