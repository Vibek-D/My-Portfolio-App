import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  const [theme, settheme] = useState(localStorage.getItem("theme"));
  const themetoggle = () => {
    settheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <IconButton
      sx={{ cursor: "pointer", color: theme === "dark" ? "white" : "black" }}
      mt={5}
      onClick={themetoggle}
    >
      <WiMoonAltWaningCrescent4 />
    </IconButton>
  );
};

export default Themetoggle;
