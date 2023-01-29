import { Container, Row, Col, Ratio } from "react-bootstrap";
import React from "react";

const Iframe = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "rgb(11, 0, 39)",
        }}
      >
        <Container>
          <Row>
            <Col xs={12} md={12}>
              <h4
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "50px",
                  marginTop: "170px",
                  marginBottom: "17px",
                  color: "orange",
                }}
              >
                Save Soil Movement
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              <Ratio
                aspectRatio="16x9"
                style={{
                  width: "82%",
                  margin: "0 auto",
                  marginTop: "25px",
                  marginBottom: "100px",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/SCHqnkR7600"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Ratio>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Iframe;
