import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import { useParams } from "react-router-dom";
import { updateUser } from "../../../helpers/update";

const EditProfile = () => {
  const { user } = useGlobalContext();
  const inpData = useRef(user);
  const handleChange = (e) => {
    inpData.current = { ...user, [e.target.name]: e.target.value };
    console.log(inpData.current);
  };

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("name", inpData.current.name);
    formData.append("last_name", inpData.current.last_name);
    formData.append("username", inpData.current.username);
    formData.append("github_account", inpData.current.github_account);
    formData.append("telegram_account", inpData.current.telegram_account);
    formData.append("web_site", inpData.current.web_site);
    formData.append("user_photo", inpData.current.user_photo);

    console.log(formData);
    updateUser(user.id, formData);
  };

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
              style={{
                backgroundColor: "#AA6800",
                color: "white",
                paddingLeft: "20px",
                borderStyle: "none",
                borderRadius: "7px",
              }}
              className="inp-place"
              defaultValue={inpData.current.name}
              type="text"
              name="name"
              placeholder="name"
              onChange={handleChange}
            />
          </center>
          <center>
            <input
              className="inp-place"
              defaultValue={inpData.current.last_name}
              type="text"
              onChange={handleChange}
              name="last_name"
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
              defaultValue={inpData.current.username}
              type="text"
              onChange={handleChange}
              name="username"
              placeholder="Юзернэйм"
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
              defaultValue={inpData.current.github_account}
              style={{
                backgroundColor: "#AA6800",
                color: "white",
                paddingLeft: "20px",
                borderStyle: "none",
                borderRadius: "7px",
              }}
              className="inp-place"
              type="text"
              name="github_account"
              placeholder="github"
            />
          </center>
          <center>
            <input
              className="inp-place"
              type="text"
              name="telegram_account"
              defaultValue={inpData.current.telegram_account}
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
              type="text"
              name="web_site"
              defaultValue={inpData.current.web_site}
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
              type="file"
              name="user_photo"
              defaultValue={inpData.current.user_photo}
              placeholder="imag"
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
            <Button
              onClick={handleSubmit}
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
