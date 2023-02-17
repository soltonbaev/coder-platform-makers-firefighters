import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import { Register } from "../../../helpers/create";
const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = () => {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("last_name", lastName);
    formData.append("username", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirm", confirmPassword);
    console.log(formData);
    Register(formData);
    navigate("/");
  };
  //?=================================================================   VALIDATION START    ======================================================================================================================================================================
  const [nameDirty, setNameDirty] = useState(false);
  const [nameError, setNameError] = useState("Поле не может быть пустым!");
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [lastNameError, setLastNameError] = useState(
    "Поле не может быть пустым!"
  );
  const [userNameDirty, setUserNameDirty] = useState(false);
  const [userNameError, setUserNameError] = useState(
    "Поле не может быть пустым!"
  );
  const [emailDirty, setEmailDity] = useState(false);
  const [emailError, setEmailError] = useState(
    "Почтовый адрес не может быть пустым!"
  );
  const [passwordDirty, setPasswordDity] = useState(false);
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым!"
  );
  const [confirmPasswordDirty, setConfirmPasswordDity] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(
    "Пароль не может быть пустым!"
  );
  const [formValid, SetFormValid] = useState(false);
  useEffect(() => {
    if (
      nameError ||
      lastNameError ||
      userNameError ||
      emailError ||
      passwordError ||
      confirmPasswordError
    ) {
      SetFormValid(false);
    } else {
      SetFormValid(true);
    }
  }, [
    nameError,
    lastNameError,
    userNameError,
    emailError,
    passwordError,
    confirmPasswordError,
  ]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 2) {
      setNameError("Некорректное имя!");
    } else {
      setNameError("");
    }
  };

  const lastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Некорректная Фамилия!");
    } else {
      setLastNameError("");
    }
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
    if (e.target.value.length < 2) {
      setUserNameError("Некорректное имя!");
    } else {
      setUserNameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email!");
    } else {
      setEmailError("");
    }
  };

  const passworHandler = (e) => {
    setPassword(e.target.value);
    // console.log(password);
    // console.log(e.target.value);
    if (e.target.value.length < 8 || e.target.value.length > 16) {
      setPasswordError("Пароль должен быть от 8 до 16 символов!");
    } else if (e.target.value != confirmPassword) {
      setPasswordError("Пароли не совпадают");
    } else {
      setPasswordError("");
      setConfirmPasswordError("");
    }
    console.log(confirmPassword);
  };
  const confirmPasswordHandler = (e) => {
    console.log(confirmPassword);
    console.log(e.target.value);
    console.log(password);

    setConfirmPassword(e.target.value);
    if (e.target.value != password) {
      setConfirmPasswordError("Пароли не совпадают!");
    } else {
      setConfirmPasswordError("");
      setPasswordError("");
    }
    setConfirmPassword(e.target.value);
  };

  const blureHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "userName":
        setUserNameDirty(true);
        break;
      case "email":
        setEmailDity(true);
        break;
      case "password":
        setPasswordDity(true);
        break;
      case "confirmPassword":
        setConfirmPasswordDity(true);
        break;
    }
  };
  //?==============================================================    VALIDATION END   ========================================================================================================================================================================================================

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
            value={name}
            onChange={(e) => nameHandler(e)}
            onBlur={(e) => blureHandler(e)}
            placeholder="Имя"
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
            value={lastName}
            onChange={(e) => lastNameHandler(e)}
            onBlur={(e) => blureHandler(e)}
            placeholder="Фамилия"
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
            name="email"
            value={email}
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blureHandler(e)}
            placeholder="Почтовый Адрес*"
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
          <input
            className="inp-place"
            type="text"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => confirmPasswordHandler(e)}
            onBlur={(e) => blureHandler(e)}
            placeholder="Поддтвердить пароль"
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
          {nameDirty && nameError && (
            <div
              style={{
                color: "red",
                fontSize: "0.8rem",
              }}
            >
              {nameError}
            </div>
          )}
          {lastNameDirty && lastNameError && (
            <div
              style={{
                color: "red",
                fontSize: "0.8rem",
              }}
            >
              {lastNameError}
            </div>
          )}
          {userNameDirty && userNameError && (
            <div
              style={{
                color: "red",
                fontSize: "0.8rem",
              }}
            >
              {userNameError}
            </div>
          )}
          {emailDirty && emailError && (
            <div
              style={{
                color: "red",
                fontSize: "0.8rem",
              }}
            >
              {emailError}
            </div>
          )}
          {passwordDirty && passwordError && (
            <div
              style={{
                color: "red",
                fontSize: "0.8rem",
              }}
            >
              {passwordError}
            </div>
          )}
          {confirmPasswordDirty && confirmPasswordError && (
            <div
              style={{
                color: "red",
                fontSize: "0.8rem",
              }}
            >
              {confirmPasswordError}
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
            Cоздать
          </Button>
        </center>
        <center>
          <RouterLink to="/login">
            <Typography sx={{ fontSize: "0.8rem" }}>
              Уже есть аккаунт? Войти
            </Typography>
          </RouterLink>
        </center>
      </Box>
    </div>
  );
};

export default Auth;
