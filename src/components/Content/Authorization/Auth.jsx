import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Link } from "@mui/material";
const Auth = () => {
  return (
    <div>
      <Box
        sx={{
          margin: "20px",
        }}
      >
        <h1>Регистрация</h1>
        <center>
          <input
            className="inp-place"
            type="text"
            placeholder="Имя"
            style={{
              backgroundColor: "#AA6800",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            placeholder="Фамилия"
            style={{
              backgroundColor: "#AA6800",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            placeholder="Юзернэйм*"
            style={{
              backgroundColor: "#AA6800",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            placeholder="Почтовый Адрес*"
            style={{
              backgroundColor: "#AA6800",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            placeholder="Пароль*"
            style={{
              backgroundColor: "#AA6800",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            placeholder="Поддтвердить пароль"
            style={{
              backgroundColor: "#AA6800",
              borderStyle: "none",
              borderRadius: "7px",
            }}
          />
        </center>
        <center>
          <Button
            style={{
              backgroundColor: "#474747",
              borderStyle: "none",
              borderRadius: "7px",
              width: "250px",
              height: "35px",
              color: "#fffdfd",
            }}
          >
            Cоздать
          </Button>
        </center>
        <Link href="#" variant="body2">
          Have an account? Sign In.
        </Link>
      </Box>
    </div>
  );
};

export default Auth;
