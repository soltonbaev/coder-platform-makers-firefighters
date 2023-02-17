import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

const EditProfile = () => {
  //?==============================================================    VALIDATION END   ========================================================================================================================================================================================================

  return (
    <div>
      <Box
        sx={{
          margin: "20px",
        }}
      >
        <center>
          <h1>редактирование Профилья</h1>
        </center>
        <Box style={{ display: "block" }}>
          <center>
            <input
              className="inp-place"
              type="text"
              name="githbub"
              placeholder="github"
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
              placeholder="lastName"
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
              name="telegram"
              placeholder="telegram acc"
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
              type="file"
              name="image"
              placeholder="image"
              style={{
                backgroundColor: "#AA6800",
                color: "white",
                paddingLeft: "20px",
                borderStyle: "none",
                borderRadius: "7px",
                alignContent: "center",
              }}
            />
          </center>
          <center>
            <input
              className="inp-place"
              type="text"
              name="website"
              placeholder="website"
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
              name="parol"
              placeholder="parol"
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
                width: "275px",
                height: "35px",
                color: "#fffdfd",
              }}
            >
              Cохранить
            </Button>
          </center>
        </Box>
      </Box>
    </div>
  );
};

export default EditProfile;