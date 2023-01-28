import {
  AppBar,
  Container,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
  Tab,
} from "@mui/material";
import HamBurg from "./HamBurg";
import logo from "../assets/logoEB.96f33359 (1).png";
import React, { useState } from "react";

const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const Elements = ["COLLECTION", "SOIL CRISIS", "#SAVESOIL", "FAQS"];
  return (
    <>
      <Container maxWidth={false}>
        <AppBar>
          <Toolbar
            sx={{
              padding: "12px 12px",
            }}
          >
            {isMatch ? (
              <>
                <Box component="div">
                  <img
                    src={`${logo}`}
                    alt="logoofthewebsite"
                    style={{
                      width: "180px",
                      backgroundColor: "none",
                      height: "65px",
                      display: "inline-block",
                      alignItems: "top",
                    }}
                  ></img>
                </Box>
                <HamBurg />
              </>
            ) : (
              <>
                <Box component="div">
                  <img
                    src={`${logo}`}
                    alt="logoofthewebsite"
                    style={{
                      width: "280px",
                      backgroundColor: "none",
                      height: "65px",
                      display: "inline-block",
                      alignItems: "top",
                    }}
                  ></img>
                </Box>
                <Tabs
                  textColor="white"
                  indicatorColor="secondary"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                  sx={{
                    marginLeft: "auto",
                  }}
                >
                  {Elements.map((items, index) => {
                    return <Tab key={index} label={items}></Tab>;
                  })}
                </Tabs>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Header;
