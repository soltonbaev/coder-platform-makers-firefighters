import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Header/logo.svg";
import Image from "../Header/image.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "@mui/material";

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
        sx={{ backgroundColor: "white", height: "10vh", width: "100%" }}
      >
        <Toolbar>
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
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              // width: "95%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: { xs: "50%", md: "30%" } }}>
              <Box sx={{ width: { xs: "100%", sm: "50%" } }}>
                <img src={Logo} width="100%" />
              </Box>
            </Box>
            <Box
              sx={
                {
                  // margin: "0 auto",
                  // marginRight: "30%",
                  // border: "2px solid red",
                }
              }
            >
              <input
                type="text"
                style={{
                  height: { xs: "2vh", sm: "5vh" },
                  width: "30vw",

                  // marginTop: "15px",
                  borderColor: "darkgray",
                  backgroundColor: "#c2c2c2",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                width: "30%",
                justifyContent: "flex-end",
              }}
            >
              <Link>
                <AccountCircleIcon
                  sx={{ fill: "black", height: "4rem", marginRight: "10px" }}
                />
              </Link>
              <Link>
                <img src={Image} style={{ height: "1.5rem" }} />
              </Link>
            </Box>
          </Typography>
          {/* <Button color="inherit"></Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
