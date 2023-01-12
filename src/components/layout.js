import React from "react";
import "assets/stylesheets/application.scss";
import { Container } from "react-bootstrap";
import Header from "components/header";
import Footer from "components/footer";
import "@fontsource/gemunu-libre";
import "@fontsource/source-sans-3";

const Layout = ({ children, pageName }) => {
  return (
    <>
      <Container fluid="true" className="px-0 main g-0">
          <Header />
          <main>{children}</main>
          <Footer />
      </Container>
    </>
  );
};

export default Layout;
