import { Block } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { borderRadius, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
// import Ernast from "./images/ernast.svg";
import Fire from "./images/fireexting 1.svg";
import bita from "./images/image 5.svg";

const Users = () => {
  const { getUsers, usersList } = useGlobalContext();
  const navigate = useNavigate();
  //   console.log(usersList);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <Container maxWidth="lg" sx={{ display: "flex" }}>
      <div>
        <Grid
          sx={{
            paddingTop: "3%",
            display: "block",
            backgroundColor: " rgba(217, 217, 217, 1)",
            width: "48%",
            height: "100%",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <Grid item>Фильтрация пользователей</Grid>
          <Grid
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginLeft: "6%",
              width: "70%",
            }}
          >
            <span
              style={{
                border: "1px solid rgba(0, 70, 5, 1)",
                color: "rgba(0, 70, 5, 1)",
                borderRadius: "8px",
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              по репутации
            </span>{" "}
            <span
              style={{
                border: "1px solid rgba(0, 70, 5, 1)",
                color: "rgba(0, 70, 5, 1)",
                borderRadius: "8px",
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              новые
            </span>{" "}
            <span
              style={{
                border: "1px solid rgba(0, 70, 5, 1)",
                color: "rgba(0, 70, 5, 1)",
                borderRadius: "8px",
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              голосующие
            </span>{" "}
            <span
              style={{
                border: "1px solid rgba(0, 70, 5, 1)",
                color: "rgba(0, 70, 5, 1)",
                borderRadius: "8px",
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              админы
            </span>{" "}
            <span
              style={{
                border: "1px solid rgba(0, 70, 5, 1)",
                color: "rgba(0, 70, 5, 1)",
                borderRadius: "8px",
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              трекеры
            </span>{" "}
            <span
              style={{
                border: "1px solid rgba(0, 70, 5, 1)",
                color: "rgba(0, 70, 5, 1)",
                borderRadius: "8px",
                marginLeft: "5%",
                marginTop: "5%",
              }}
            >
              менторы
            </span>
            <span
              style={{
                border: "1px solid rgba(0, 70, 5, 1)",
                color: "rgba(0, 70, 5, 1)",

                borderRadius: "8px",
                marginLeft: "5%",
                marginTop: "5%",
              }}
              s
            >
              кураторы
            </span>
          </Grid>
        </Grid>
      </div>
      <div style={{ display: "block", width: "100%" }}>
        <h1>Пользователи</h1>
        <Grid container style={{ display: "flex", flexWrap: "wrap" }}>
          {usersList.map((user) => (
            <Grid
              item
              style={{
                backgroundColor: "rgba(217, 217, 217, 1)",
                width: "300px",
                alignContent: "center",
                borderRadius: "8px",
                display: "flex",
                flexWrap: "wrap",
                paddingTop: "3%",
                paddingBottom: "3%",
                marginTop: "2%",
                marginRight: "4%",
                marginLeft: "4%",
              }}
              //   onClick={() => navigate("/userProfile")}
            >
              <Grid
                item
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <Grid item>
                  {/* <img src="#" alt="Эрнас “Сладкая душа”" /> */}
                  {/* {user.user_photo} */}
                </Grid>
                <Grid item style={{ marginLeft: "5%  ", width: "60%" }}>
                  <div
                    style={{
                      color: "rgba(71, 71, 71, 1)",
                      fontFamily: "Raleway",
                      fontSize: "14px",
                      fontWeight: "700",
                      lineHeight: "14px",
                      textAlign: "left",
                    }}
                  >
                    {user.username}
                  </div>
                  <div
                    style={{
                      fontFamily: "Raleway",
                      fontSize: "12px",
                      fontWeight: "400",
                      lineLeight: "12px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      marginBottom: "3%",
                    }}
                  >
                    {user.email}
                  </div>
                </Grid>
              </Grid>
              <div style={{ display: "block", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-around",
                    fontSize: "10px",
                  }}
                >
                  <div style={{ color: " rgba(170, 104, 0, 1)" }}>
                    Голосов: 200
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={Fire} alt="" />
                    <div style={{ color: " rgba(170, 104, 0, 1)" }}> 2 </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={bita} alt="" />
                    <div style={{ color: " rgba(170, 104, 0, 1)" }}> 3</div>
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "3% ",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: " rgba(170, 104, 0, 1)",
                      color: "white",
                      borderRadius: "5px",
                      fontFamily: "Raleway",
                      fontSize: "10px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    javascript
                  </div>
                  <div
                    style={{
                      backgroundColor: " rgba(170, 104, 0, 1)",
                      color: "white",
                      borderRadius: "5px",
                      fontFamily: "Raleway",
                      fontSize: "10px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    react
                  </div>
                  <div
                    style={{
                      backgroundColor: " rgba(170, 104, 0, 1)",
                      color: "white",
                      borderRadius: "5px",
                      fontFamily: "Raleway",
                      fontSize: "10px",
                      fontWeight: "400",
                      lineHeight: "15px",
                      letterSpacing: "0em",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    html
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default Users;
