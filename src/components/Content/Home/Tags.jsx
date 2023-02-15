
import { Box } from "@mui/material";
import React from "react";
import "./Tags.css";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Tags = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <>
      <Box className="firstBox" style={{ display: "block" }}>
        <Box className="searchForTegs">
          <div>Поиск по тэгам </div>
        </Box>
        <Box className="secondTypeOfFirstBox">
          <p className="firstP">
            Тэг - ключевое слово которое позволяет разделять вопросы по схожим
            темам. Изпользуя тэги правильным образом вы можете помочь другим
            пользователям легко найти ваш вопрос
          </p>

          <Search style={{ border: "1px solid black", borderRadius: "10px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="фильтровать по названию"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>
      </Box>

      <Box
        className="secondContainer"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          className="firstTypeOfSecondContainer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: {
              xl: "300px",
              lg: "250px",
              md: "200px",
              sm: "150px",
              xs: "100px",
            },
          }}
        >
          <span>javascript</span>
          <div className="lorem">
            Вопросы по динамически типизированному языку программирования
            который широко используется на просторах Интернета
          </div>
          <div className="lastSecondContainer">Всего задано 250 вопросов</div>
        </Box>
        <Box
          className="firstTypeOfSecondContainer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: {
              xl: "300px",
              lg: "250px",
              md: "200px",
              sm: "150px",
              xs: "100px",
            },
          }}
        >
          <span>javascript</span>
          <div className="lorem">
            Вопросы по динамически типизированному языку программирования
            который широко используется на просторах Интернета
          </div>
          <div className="lastSecondContainer">Всего задано 250 вопросов</div>
        </Box>
        <Box
          className="firstTypeOfSecondContainer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: {
              xl: "300px",
              lg: "250px",
              md: "200px",
              sm: "150px",
              xs: "100px",
            },
          }}
        >
          <span>javascript</span>
          <div className="lorem">
            Вопросы по динамически типизированному языку программирования
            который широко используется на просторах Интернета
          </div>
          <div className="lastSecondContainer">Всего задано 250 вопросов</div>
        </Box>
        <Box
          className="firstTypeOfSecondContainer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: {
              xl: "300px",
              lg: "250px",
              md: "200px",
              sm: "150px",
              xs: "100px",
            },
          }}
        >
          <span>javascript</span>
          <div className="lorem">
            Вопросы по динамически типизированному языку программирования
            который широко используется на просторах Интернета
          </div>
          <div className="lastSecondContainer">Всего задано 250 вопросов</div>
        </Box>
        <Box
          className="firstTypeOfSecondContainer"
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: {
              xl: "300px",
              lg: "250px",
              md: "200px",
              sm: "150px",
              xs: "100px",
            },
          }}
        >
          <span>javascript</span>
          <div className="lorem">
            Вопросы по динамически типизированному языку программирования
            который широко используется на просторах Интернета
          </div>
          <div className="lastSecondContainer">Всего задано 250 вопросов</div>
        </Box>
      </Box>
    </>
  );

};

export default Tags;
