import React from "react";
import { Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";


const DeviceView = ({ shadowJson }) => {

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

    if (active_colour) {

      const background_style = {
        backgroundColor: "rgb(" + active_colour[0] + ", " + active_colour[1] + ", " + active_colour[2] + ")"
      }
      
      return (
        <>
          <Col id="device-view" style={background_style} className="text-center">
            <div id="device-view-content">
              <StaticImage src="../assets/images/ExpressLink_2048px.png" />
              <span>
                <a href={active_url} target="_blank" rel="noreferrer">{active_url}</a>
              </span>
            </div>
          </Col>
        </>
      )
    } else {
      return (
        <>
          <Col id="device-view">
            <p>The device shadow is missing data, please try again later</p>
          </Col>
        </>
      )
    }
  } else {
    return (
      <>
        <Col id="device-view">
          <p>The device shadow is being fetched, please wait...</p>
        </Col>
      </>
    )
  }
}
export default DeviceView;