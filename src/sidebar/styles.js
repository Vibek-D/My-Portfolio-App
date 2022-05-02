import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  drawerStyles: {
    "& .MuiDrawer-paper": {
      width: 100,
      color: "whitesmoke",
      borderRight: "none",
      padding: 0.5,
      overflow: "hidden",
      backgroundColor:
        localStorage.getItem("theme") === "dark" ? "white" : "#0c0c0c",
    },
  },
}));
