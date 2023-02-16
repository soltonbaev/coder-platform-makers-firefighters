import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const ProfilePage = () => {
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
          width: "13vw",
          height: "80vh",
          backgroundColor: "rgb(217 217 217)",
          margin: "30px",
          borderRadius: "10px",
        }}
      >
        <Grid item>
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "28px",
              paddingBottom: "2rem",
            }}
          >
            Уголок Пользователя
          </Typography>
          <Typography
            sx={{
              display: "flex",
              textAlign: "center",
              flexDirection: "column",
              rowGap: "15px",
            }}
          >
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Профиль
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Активность
              </Typography>{" "}
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Закладки
              </Typography>{" "}
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Настройки
              </Typography>{" "}
            </Link>
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
      <Grid item>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
    //  </Container>
  );
};

export default ProfilePage;
