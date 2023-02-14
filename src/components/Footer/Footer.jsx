import { Box } from "@mui/system";
import React from "react";
import BgImage from "../Footer/fireextwhite copy flipped rotated orange copy 1.png";
import Logo from "../Footer/makers logo white 1.png";

const Footer = () => {
  return (
    <div style={{ position: "absolute", bottom: "0" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          height: "350px",
          width: "100vw",
          backgroundColor: "rgb(71 71 71)",
          backgroundImage: `${BgImage}`,
          //  justifyContent: "end",
        }}
      >
        <img
          src={BgImage}
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        />
        <Box>
          <img src={Logo} />
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
