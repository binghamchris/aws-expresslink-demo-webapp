import React from "react";
import { Col } from "react-bootstrap";

const DeviceShadow = ({ shadowJson }) => {
  if (shadowJson) {
    return (
      <>
        <Col id="device-shadow">
          <h2>Current Shadow</h2>
          <h3>Button Configuration</h3>
          <h4>Button 1</h4>
          <table>
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
          <h4>Button 2</h4>
          <table>
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
          <h4>Button 3</h4>
          <table>
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
          <h3>Active Button Configuration</h3>
          <p>Button {shadowJson.active_button_config}</p>
          <h3>Sensors</h3>
          <table>
            <tbody>
              <tr>
                <th>Temperature</th>
                <td>{shadowJson.temperature}</td>
              </tr>
              <tr>
                <th>Humidity</th>
                <td>{shadowJson.humidity}</td>
              </tr>
              <tr>
                <th>Light</th>
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