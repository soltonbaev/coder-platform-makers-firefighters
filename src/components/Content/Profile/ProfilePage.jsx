import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

import { Link } from "react-router-dom";
import Tg from "../Profile/tg.svg";
import Git from "../Profile/git.svg";
import ImgLink from "../Profile/imgLink.svg";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
const ProfilePage = () => {
  const { user } = useGlobalContext();
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
          width: "20vw",
          height: "90vh",
          backgroundColor: "rgb(217 217 217)",
          margin: "30px",
          borderRadius: "10px",
        }}
      >
        <Grid
          item
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "28px",
              paddingBottom: "2rem",
              color: "#474747",
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
              color: "#b0761b",
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
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Закладки
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Настройки
              </Typography>
            </Link>
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            marginTop: "20px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              textAlign: "center",
              fontWeight: "400",
              fontSize: "24px",
              lineHeight: "28px",
              paddingBottom: "1.5rem",
              color: "#474747",
            }}
          >
            Мои Группы
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
                Линуксоиды
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                JS28
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Py24
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Hackers
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                MAckers Mentors
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Programmers
              </Typography>
            </Link>
            <Link>
              <Typography
                sx={{
                  color: "#b0761b",
                }}
              >
                Git Rockstars
              </Typography>
            </Link>
          </Typography>
          <Link>
            <Typography
              sx={{
                color: "#474747",
                textAlign: "center",

                marginTop: "2rem",
              }}
            >
              Показать все группы...
            </Typography>
          </Link>
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          marginTop: "1.5rem",
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
              sx={{ width: "16vw", height: "30vh" }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </Box>
          <Box
            sx={{
              marginLeft: "1rem",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "30px",
                lineHeight: "35px",
              }}
            >
              {user.name} {user.last_name}
            </Typography>
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#AA6800",
              }}
            >
              участник с 22 апреля, 2021 года
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
                Пожарный,ментор,админ
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: "0.5rem",
              }}
            >
              <Link>
                <img src={Tg} />
              </Link>
              <Link>
                <img src={Git} style={{ marginLeft: "0.5rem" }} />
              </Link>
              <Link>
                <img src={ImgLink} style={{ marginLeft: "0.5rem" }} />
                linustorvalds.com
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              marginLeft: "20%",
            }}
          >
            <Button
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "18px",
                color: "#474747",
                textAlign: "center",
                border: "1px solid #474747",
                borderRadius: "5px",
              }}
            >
              Редактировать профиль
            </Button>
          </Box>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Grid>
    //  </Container>
  );
};

export default ProfilePage;
