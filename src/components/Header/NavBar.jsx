import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Header/Logo";

import Search from "../Header/search.svg";
import RightSideIcons from "./RightSideIcons";

const NavBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        height: "10vh",
        width: "100%",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          height: "10vh",
          width: "100%",
          boxShadow: "none",
          borderStyle: "solid",
          borderWidth: "0 0 1px 0 ",
          borderColor: "#1e1e1e50",
          position: "fixed",
        }}
      >
        <Toolbar
          sx={{
            paddingTop: { xs: "10px" },
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color=""
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon
              sx={{
                display: { xs: "block", md: "none" },
                color: "red",
                marginBottom: "5px",
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Logo />
            <Box sx={{ position: "relative", display: "flex" }}>
              <input
                type="text"
                placeholder="искать вопросы"
                style={{
                  height: "4vh",
                  width: "30vw",
                  borderColor: "darkgray",
                  backgroundColor: "#D9D9D9",
                  borderRadius: "10px",
                  paddingLeft: "10%",
                  borderStyle: "none",
                }}
              />
              <img src={Search} alt="" className="search-icon" />
            </Box>
            <RightSideIcons />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
