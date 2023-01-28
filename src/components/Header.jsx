import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logoEB.96f33359 (1).png";
import Header2 from "../components/Header2";
const Header = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "rgb(12, 3, 56)",
          color: "white",
        }}
      >
        <Navbar
          expand="lg"
          className=" bg-transparent"
          variant="dark"
          style={{
            padding: "16px 10px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <Container>
            <Navbar.Brand>
              <img
                src={`${logo}`}
                alt="logo"
                width="200"
                height="50"
                className="d-inline-block align-top"
              ></img>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <Nav.Link>COLLECTION</Nav.Link>
                <Nav.Link>SOIL CRISES</Nav.Link>
                <Nav.Link>#SAVESOIL</Nav.Link>
                <Nav.Link>FAQS</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Header2 />
      </Container>
    </>
  );
};

export default Header;
