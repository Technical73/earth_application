import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CopyrightIcon from "@mui/icons-material/Copyright";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        style={{
          color: "white",
          padding: "10%",

          textAlign: "center",
        }}
      >
        <Row>
          <Col
            xs={12}
            md={12}
            style={{
              fontSize: "21px",
              alignItems: "center",
            }}
          >
            <span>
              <CopyrightIcon
                style={{
                  fontSize: "40px",
                  color: "orange",
                }}
              />
              Earth Buddy Collective in 2023,All Rights Reserved. Privacy Policy
              | Accessibility Statement | Terms of Service
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <div className="d-flex justify-content-center align-items-center">
              <TwitterIcon
                style={{
                  marginRight: "7px",
                  color: "skyblue",
                  cursor: "pointer",
                }}
              />
              <FacebookIcon
                style={{
                  marginRight: "7px",
                  color: "skyblue",
                  cursor: "pointer",
                }}
              />
              <GitHubIcon
                style={{
                  marginRight: "7px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
