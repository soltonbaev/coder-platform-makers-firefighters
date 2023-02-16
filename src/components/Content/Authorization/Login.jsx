import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { login } from "../../../helpers/create";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userNameError, setUserNameError] = useState(
    "Поле не может быть пустым!"
  );
  const [passwordDirty, setPasswordDity] = useState(false);
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым!"
  );
  const [formValid, SetFormValid] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = () => {
    let formData = new FormData();

    formData.append("username", userName);
    formData.append("password", password);
    login(formData, userName);
    navigate("/");
  };

  useEffect(() => {
    if (userNameError || passwordError) {
      SetFormValid(false);
    } else {
      SetFormValid(true);
    }
  }, [userNameError, passwordError]);
  const userNameHandler = (e) => {
    setUserName(e.target.value);
    if (e.target.value.length < 2) {
      setUserNameError("Некорректное имя!");
    } else {
      setUserNameError("");
    }
  };
  const passworHandler = (e) => {
    setPassword(e.target.value);

    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setPasswordError("Пароль должен быть от 8 до 16 символов!");
    } else {
      setPasswordError("");
    }
  };
  const blureHandler = (e) => {
    switch (e.target.name) {
      case "userName":
        setUserNameDirty(true);
        break;

      case "password":
        setPasswordDity(true);
        break;
    }
  };
  return (
    <div>
      <Box>
        <center>
          <h1>Авторизация</h1>
        </center>
        <center>
          <input
            className="inp-place"
            type="text"
            name="userName"
            value={userName}
            onChange={(e) => userNameHandler(e)}
            onBlur={(e) => blureHandler(e)}
            placeholder="Юзернэйм*"
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
            placeholder="Пароль*"
            name="password"
            value={password}
            onChange={(e) => passworHandler(e)}
            onBlur={(e) => blureHandler(e)}
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
          {userNameDirty && userNameError && (
            <div
              style={{
                color: "red",
              }}
            >
              {userNameError}
            </div>
          )}
          {passwordDirty && passwordError && (
            <div
              style={{
                color: "red",
              }}
            >
              {passwordError}
            </div>
          )}
          <Button
            disabled={!formValid}
            style={{
              marginTop: "10px",
              backgroundColor: "#474747",
              borderStyle: "none",
              borderRadius: "7px",
              width: "250px",
              height: "35px",
              color: "#fffdfd",
            }}
            onClick={handleSubmit}
          >
            Войти
          </Button>
        </center>
        <center>
          <RouterLink to="/auth">Dont have an account?Sign up!</RouterLink>
        </center>
      </Box>
    </div>
  );
};

export default Login;
