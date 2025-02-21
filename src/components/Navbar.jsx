import React, { useContext } from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { activePage, setActivePage } = useContext(AppContext);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Shipping Box</Typography>
        <div>
          <Button
            component={Link}
            to="/"
            color={activePage === "form" ? "secondary" : "inherit"}
            onClick={() => setActivePage("form")}
          >
            Add Box
          </Button>
          <Button
            component={Link}
            to="/list"
            color={activePage === "list" ? "secondary" : "inherit"}
            onClick={() => setActivePage("list")}
          >
            List Boxes
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
