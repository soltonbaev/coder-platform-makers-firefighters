import { Box } from "@mui/system";
import React from "react";
import BgImage from "../Footer/fire-ext-orange.svg";
import Logo from "../Footer/makers-logo-white.svg";
import firePng from "../Footer/firefighters.svg";
import { Button, Link } from "@mui/material";

const Footer = () => {
  return (
    <div style={{ position: "absolute", bottom: "0" }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          height: "350px",
          width: "100vw",
          flexDirection: "column",
          backgroundColor: "rgb(71 71 71)",
          backgroundImage: `${BgImage}`,
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
        <Box
          className="futter"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              gap: "0.1px",
            }}
          >
            <img style={{ width: "90px" }} src={Logo} />
            <img style={{ width: "70px" }} src={firePng} />
          </Box>
          <Box>
            <h4>Навигация</h4>
            <p>Навигация</p>
            <p>Навигация</p>
            <p>Навигация</p>
            <p>Навигация</p>
          </Box>
          <Box>
            <h4>Навигация</h4>
            <p>Навигация</p>
            <p>Навигация</p>
          </Box>
          <Box>
            <h4>Навигация</h4>
            <p>Навигация</p>
            <p>Навигация</p>
            <p>Навигация</p>
          </Box>
          <Box>
            <h4>Навигация</h4>
            <p>Навигация</p>
            <p>Навигация</p>
            <p>Навигация</p>
          </Box>
        </Box>
        <Box
          sx={{
            marginRight: "30%",
          }}
        >
          <Button
            sx={{
              color: " #ffffff",
              border: "1px solid white",
              borderRadius: "8px",
            }}
          >
            Задать вопрос{" "}
          </Button>
        </Box>
        <Box
          sx={{
            marginLeft: "10%",
          }}
        >
          <p>
            @ 2023 - проект создан командами из PY24: Николай, Артур, Александр
            JS28: Бекмырза, Эрнас, Ибраим
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
