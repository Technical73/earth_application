import React from "react";
import { Header, Iframe, Faqs } from "../components";
import { Container } from "react-bootstrap";
const SinglePage = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "rgb(11, 0, 39)",
        }}
      >
        <Header />
        <Iframe />
        <Faqs />
      </Container>
    </>
  );
};

export default SinglePage;
