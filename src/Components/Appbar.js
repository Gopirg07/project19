import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Box, Container, IconButton, Tooltip, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import MovieCreationRoundedIcon from '@mui/icons-material/MovieCreationRounded';

export default function Appbar() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  }
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                component="a"
                sx={{
                  mr: 6,
                  display: { md: "flex" },
                  fontFamily: "monospace",
                  fontSize:"30px",
                  fontWeight: 700, 
                  color: "inherit",
                  textDecoration: "none", 
                }}
                onClick={() => navigate("/")}
              >
                <MovieCreationRoundedIcon sx={{ fontSize: 40 }}/>
              </Typography>
              <Box sx={{ flexGrow: 1}}>
              {/* <Box sx={{ display: { md: "flex" } }}> */}
                <Button color="inherit" onClick={() => navigate("/Movie")}>
                  Movies
                </Button>
                <Button color="inherit" onClick={() => navigate("/AddMovie")}>
                  Add Movie
                </Button>
                  </Box>

                <Tooltip title="Logout">
                  <IconButton sx={{ ml: 3, p: 0 }} onClick={() => logout()}>
                    <LogoutIcon fontSize="medium" sx={{ color: "white " }} />{" "}
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Roboto",
                        fontWeight: "500", 
                        margin: "0px 0px 0px 0px",
                        fontSize: "15px",
                      }}
                    >
                      Logout
                    </p>
                  </IconButton>
                </Tooltip>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
}
