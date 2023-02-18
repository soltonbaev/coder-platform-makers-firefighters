import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { Register } from "../../../helpers/create";
const RenderUserProfile = () => {
  //?==============================================================    VALIDATION END   ========================================================================================================================================================================================================
  const navigate = useNavigate();
  return (
    <div>
      <Box
        sx={{
          margin: "20px",
        }}
      >
        <center>
          <h1>Регистрация</h1>
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            name="name"
            placeholder="имя"
            style={{
              backgroundColor: "#AA6800",
              color: "white",
              paddingLeft: "20px",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            name="lastName"
            placeholder="о себе"
            style={{
              backgroundColor: "#AA6800",
              color: "white",
              paddingLeft: "20px",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            name="email"
            placeholder="stack"
            style={{
              backgroundColor: "#AA6800",
              color: "white",
              paddingLeft: "20px",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>{" "}
        <center>
          <input
            className="inp-place"
            type="text"
            name="email"
            placeholder="stack"
            style={{
              backgroundColor: "#AA6800",
              color: "white",
              paddingLeft: "20px",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>{" "}
        <center>
          <input
            className="inp-place"
            type="text"
            name="email"
            placeholder="stack"
            style={{
              backgroundColor: "#AA6800",
              color: "white",
              paddingLeft: "20px",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <input
            type="file"
            name="image"
            style={{
              backgroundColor: "#AA6800",
              color: "white",
              paddingLeft: "20px",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <Button
            style={{
              marginTop: "10px",
              backgroundColor: "#474747",
              borderStyle: "none",
              borderRadius: "7px",
              width: "250px",
              height: "35px",
              color: "#fffdfd",
            }}
            onClick={() => navigate("/users")}
          >
            Cохранить
          </Button>
        </center>
      </Box>
    </div>
  );
};

export default RenderUserProfile;
