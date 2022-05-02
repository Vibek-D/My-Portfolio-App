import React from "react";
import { NavLink, Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { useStyles } from "./styles";
import IconButton from "@mui/material/IconButton";
import { socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function Sidebar({ open }) {
  const classes = useStyles();

  return (
    <>
      {open && (
        <Box
          variant="permanent"
          anchor="left"
          sx={{
            display: "flex",
            flex: 1,
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "var(--bg-color)",
          }}
        >
          <Box
            flex={1}
            display="flex"
            height="100%"
            flexDirection="column"
            justifyContent="center"
            sx={{
              backgroundColor: "var(--bg-color)",
            }}
          >
            <List
              disablePadding
              sx={{
                px: 1,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {Object.keys(socialprofils).map((item, index) => {
                const menuItem = (
                  <ListItem
                    button
                    disableRipple
                    key={index}
                    component={NavLink}
                    to={socialprofils[item].to}
                  >
                    <ListItemIcon
                      sx={{
                        padding: 0.6,
                        minWidth: "auto",
                      }}
                    >
                      <IconButton sx={{ cursor: "pointer", color: "var(--text-color)" }} >
                        {socialprofils[item].icon}
                      </IconButton>
                    </ListItemIcon>
                    <ListItemText
                      sx={{ mb: 0 }}
                      primary={item.text}
                      primaryTypographyProps={{
                        variant: "small",
                        fontWeight: 600,
                      }}
                    />
                  </ListItem>
                );
                return menuItem;
              })}
            </List>
            <Themetoggle />
          </Box>
          <Box
            textAlign="center"
            mb={2}
            sx={{
              backgroundColor:
                localStorage.getItem("theme") === "dark" ? "white" : "#0c0c0c",
            }}
          >
            <IconButton size="large" color="primary">
              {/* {true ? <MdDarkMode /> : <MdOutlineLightMode />} */}
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Sidebar;
