import { Avatar, Box, Grid, Pagination } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { async } from "q";
import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { USER_LIST } from "../../../helpers/globals";
import { getQuestionsRaw } from "../../../helpers/read";
import Fire from "./images/fireexting 1.svg";
import bita from "./images/image 5.svg";

const INIT_STATE = {
  users: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
  }
}

const Users = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let { data } = await axios(USER_LIST);
    console.log(data);
    dispatch({
      type: "GET_USERS",
      payload: data.results,
    });
  };

  const isMentors = () => {
    let arr = state.users.filter((user) => user.is_mentor);
    dispatch({
      type: "GET_USERS",
      payload: arr,
    });
    // console.log("arr", arr);
  };

  const newUsers = () => {
    let array = state.users.sort((a, b) => b.id - a.id);
    dispatch({
      type: "GET_USERS",
      payload: array,
    });
  };

  return (
    <Container maxWidth="lg">
      <div
        style={{
          display: "flex",
          textAlign: "baseline",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "24%" }}>
          <Grid
            sx={{
              padding: "3%",
              display: "block",
              backgroundColor: " rgba(217, 217, 217, 1)",
              // width: "48%",
              // height: "100%",
              textAlign: "center",
              borderRadius: "8px",
              width: "100%",
              height: "45%",
              marginTop: "8%",
            }}
          >
            <Grid
              item
              style={{
                width: "80%",
                marginLeft: "8%",
                fontSize: "14px",
                fontWeight: "400",
              }}
            >
              Фильтрация пользователей
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                marginRight: "8%  ",
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
                onClick={() => {
                  newUsers();
                }}
              >
                <div style={{ fontSize: "15px", padding: "2px" }}>новые</div>
              </span>{" "}
              <span
                style={{
                  border: "1px solid rgba(0, 70, 5, 1)",
                  color: "rgba(0, 70, 5, 1)",
                  borderRadius: "8px",
                  marginLeft: "5%",
                  marginTop: "5%",
                }}
                onClick={() => {
                  isMentors();
                }}
              >
                <div style={{ fontSize: "15px", padding: "2px" }}>менторы</div>
              </span>
              <span
                style={{
                  border: "1px solid rgba(0, 70, 5, 1)",
                  color: "rgba(0, 70, 5, 1)",
                  borderRadius: "8px",
                  marginLeft: "5%",
                  marginTop: "5%",
                }}
                onClick={() => {
                  getUsers();
                }}
              >
                <div style={{ fontSize: "15px", padding: "2px" }}>все</div>
              </span>
            </Grid>
          </Grid>
        </div>
        <div style={{ display: "block", width: "80%", marginLeft: "5%" }}>
          <h1>Пользователи</h1>
          <Grid container style={{ display: "flex", flexWrap: "wrap" }}>
            {state.users?.map((user) => {
              return (
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
                    paddingLeft: "1%",
                    paddingRight: "1%",
                    marginTop: "2%",
                    marginRight: "4%",
                  }}
                >
                  <Grid
                    item
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Grid item>
                      {/* <img src="#" alt="Эрнас “Сладкая душа”" /> */}
                      <Avatar
                        src={user.user_photo}
                        style={{
                          marginLeft: "20%",
                          marginBottom: "14%",
                          width: "80px",
                          height: "80px",
                        }}
                      ></Avatar>
                    </Grid>
                    <Grid item style={{ marginLeft: "20%  ", width: "80%" }}>
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
                        <Link to={`/users/${user.id}`}>{user.username}</Link>
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
                        {user.about_me}
                      </div>
                    </Grid>
                  </Grid>
                  <div style={{ display: "block", width: "100%" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        width: "75%",
                        justifyContent: "space-evenly",
                        fontSize: "10px",
                      }}
                    >
                      <div style={{ color: " rgba(170, 104, 0, 1)" }}>
                        Голосов:200
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={Fire} alt="" />
                        <div style={{ color: " rgba(170, 104, 0, 1)" }}>
                          {user.is_fireman}3
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={bita} alt="" />
                        <div style={{ color: " rgba(170, 104, 0, 1)" }}>
                          {user.is_mentor}5
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "94%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginTop: "4% ",
                        alignContent: "center",
                        alignItems: "center",
                        textAlign: "center",
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
                          width: "20%",
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
                          width: "20%",
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
                          width: "20%",
                        }}
                      >
                        html
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </Container>
  );
};

export default Users;
