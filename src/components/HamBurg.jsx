import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  List,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const HamBurg = () => {
  const [open, setOpen] = useState(false);
  const Elements = ["COLLECTION", "SOIL CRISIS", "#SAVESOIL", "FAQS"];
  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {Elements.map((items, index) => {
            return (
              <ListItemButton key={index} onClick={() => setOpen(false)}>
                <ListItemIcon>
                  <ListItemText>{items}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          marginLeft: "auto",
          backgroundColor: "white",
          color: "orange",
        }}
      >
        <MenuBookIcon />
      </IconButton>
    </>
  );
};

export default HamBurg;
