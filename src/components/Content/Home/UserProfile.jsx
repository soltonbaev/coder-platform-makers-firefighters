import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { borderRadius, Container } from "@mui/system";
import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import Tg from "../Profile/tg.svg";
import Git from "../Profile/git.svg";
import ImgLink from "../Profile/imgLink.svg";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import { getUserProfile } from "../../../helpers/read";

const UserPage = () => {
  const params = useParams();
  const [user, setUser] = useState("");
  //   const { getUsers, usersList, user } = useGlobalContext();
  //   console.log(user.name);
  //   console.log(user.last_name);

  //   const userfFunc = (user) => {
  //     getUserProfile(user);
  // //   };
  //   console.log(user);
  useEffect(() => {
    getUserProfile(params.id).then((res) => {
      setUser(res);
    });
    // getUsers();
  }, []);

  const navigate = useNavigate();

  return (
    //  <Container>
    <Grid
      container
      style={{
        marginBottom: "50px",
      }}
    >
      <Grid
        item
        sx={{
          marginTop: "1.5rem",
          width: "100%",
          marginLeft: "5%",
        }}
      >
        <Grid
          item
          sx={{
            width: "1000px",
            display: "flex",
          }}
        >
          <Box>
            <Avatar
              sx={{
                height: "128px",
                width: "128px",
                left: " 0px",
                top: " 0px",
                borderRadius: "64px",
              }}
              alt="Remy Sharp"
              src={user.user_photo}
            />
          </Box>
          <Box
            sx={{
              marginLeft: "1rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18px",
                color: "rgba(71, 71, 71, 1)",
              }}
            >
              {user.name} {user.last_name}
            </Typography>

            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "13px",
                lineHeight: "18px",
                color: "rgba(170, 104, 0, 1)",
              }}
            >
              участник с:{user.date_joined}
            </Typography>
            <Box
              sx={{
                display: "flex",
                marginTop: "1.5rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "18px",
                  color: "#474747",
                }}
              >
                Статус:
              </Typography>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: "16px",
                  lineHeight: "18px",
                  color: "#004605",
                }}
              >
                {user.is_fireman} {user.is_mentor}
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "0.5rem",
              }}
            >
              <Link to={user.telegram_account}>
                <img src={Tg} />
              </Link>
              <Link to={user.github_account}>
                {/* <a src={user.github_account}></a> */}

                <img src={Git} style={{ marginLeft: "0.5rem" }} />
              </Link>
              <Link to={user.web_site}>
                <img src={ImgLink} style={{ marginLeft: "0.5rem" }} />
              </Link>
            </Box>
            <Box>
              Обо мне
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "18px",
                  color: "#AA6800",
                  border: "1px solid rgba(217, 217, 217, 1)",
                  borderRadius: "5px",
                  paddin: "10px",
                }}
              >
                <p
                  style={{
                    margin: "2%",
                    color: "rgba(71, 71, 71, 1)",
                    fontFamily: "Raleway",
                    fontSize: "16px",
                    fontWeight: " 400",
                    linHeight: "19px",
                    textalign: "left",
                  }}
                >
                  {user.about_me}
                </p>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
    //  </Container>
  );
};

export default UserPage;
