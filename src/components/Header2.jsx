import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import banner from "../assets/new-header-banner.webp";
import banner2 from "../assets/text.dbb951df.png";

const Header2 = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card
              style={{
                backgroundColor: "rgb(12, 3, 56)",
                width: "100%",
                margin: "10% 0",
                border: "none",
              }}
            >
              <Row>
                <Col xs={12} md={6} className="mb-4">
                  <Card.Img
                    src={`${banner}`}
                    alt="banneroftheimage"
                    variant="top"
                    style={{
                      border: "2px solid blue",
                    }}
                  ></Card.Img>
                </Col>
                <Col xs={12} md={6} className="mb-4">
                  <Card.Img
                    src={`${banner2}`}
                    alt="banneroftheimage2"
                    variant="top"
                  ></Card.Img>
                  <Card.Text
                    style={{
                      fontSize: "18px",
                      fontWeight: "400",
                      margin: "0 5px",
                    }}
                  >
                    A FREE NFT COLLECTION TO Save Soil Logo WITH SADHGURU
                  </Card.Text>
                  <Button
                    style={{
                      marginTop: "23px",
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
