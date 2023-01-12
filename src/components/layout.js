import React from "react";
import "assets/stylesheets/application.scss";
import { Container } from "react-bootstrap";
import "@fontsource/gemunu-libre";
import "@fontsource/source-sans-3";

const Layout = ({ children, pageName }) => {
  return (
    <>
      <Container fluid="true" className="px-0 main g-0">
          <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
