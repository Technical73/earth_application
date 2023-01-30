import { Container, Row, Col, Card, Button } from "react-bootstrap";
import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import FaqData from "../components/FaqData";

const Faqs = () => {
  const [open, setOpen] = useState(null);

  const toggle = (items) => {
    if (open === items.id) {
      return setOpen(null);
    }
    setOpen(items.id);
  };

  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "red",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Container
          style={{
            backgroundColor: "orange",
          }}
        >
          <Row>
            <Col
              xs={12}
              md={12}
              style={{
                textAlign: "center",

                fontSize: "serif",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: "44px",
                  fontWeight: "700",
                }}
              >
                FAQS
              </span>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
              {FaqData.map((items) => {
                return (
                  <>
                    <Card
                      onClick={() => toggle(items)}
                      key={items.id}
                      style={{
                        backgroundColor: "rgb(11, 0, 39)",
                        color: "white",

                        cursor: "pointer",
                        marginBottom: "8px",
                      }}
                    >
                      <Card.Header className="d-flex justify-content-between">
                        <Card.Text
                          style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "auto 0",
                          }}
                        >
                          {items.question}
                        </Card.Text>
                        <Button
                          onClick={() => toggle(items)}
                          variant="outline"
                          style={{
                            color: "orange",
                            fontSize: "19px",

                            display: "flex",
                            alignItems: "center",
                            margin: "auto 0",
                          }}
                        >
                          {open === items.id ? (
                            <KeyboardDoubleArrowDownIcon />
                          ) : (
                            <KeyboardDoubleArrowUpIcon />
                          )}
                        </Button>
                      </Card.Header>

                      {open === items.id ? (
                        <>
                          <Card.Body
                            style={{
                              color: "white",
                            }}
                          >
                            {items.answer}
                          </Card.Body>
                        </>
                      ) : null}
                    </Card>
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Faqs;
