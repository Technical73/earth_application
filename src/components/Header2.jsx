import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import banner from "../assets/new-header-banner.webp";
import banner2 from "../assets/text.dbb951df.png";

const Header2 = () => {
  return (
    <>
      <Container
        style={{
          backgroundColor: "rgb(12, 3, 56)",
        }}
      >
        <Row>
          <Col>
            <Card
              style={{
                backgroundColor: "rgb(12, 3, 56)",
                marginBottom: "152px",
                marginTop: "110px",
              }}
            >
              <Row spacing={3}>
                <Col xs={12} md={6}>
                  <Card.Img
                    src={`${banner}`}
                    alt="banneroftheimage"
                    variant="top"
                  ></Card.Img>
                </Col>
                <Col xs={12} md={6}>
                  <Card.Img
                    src={`${banner2}`}
                    alt="banneroftheimage2"
                    variant="top"
                  ></Card.Img>
                  <Card.Text
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                  >
                    A FREE NFT COLLECTION TO Save Soil Logo WITH SADHGURU
                  </Card.Text>
                  <Button
                    style={{
                      marginTop: "70px",
                    }}
                    variant="outline-info"
                  >
                    REGISTER FOR FREE NFT
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header2;
