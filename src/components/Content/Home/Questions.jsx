import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./q.css";
import RenderQuestion from "./RenderQuestion";
import SideBar from "./Sidebar";

import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import { getQuestions, getQuestionsRaw } from "../../../helpers/read";

const Questions = () => {
  // console.group("Questions group");
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const { setShowToast, setErrorType, setToastMessage } = useGlobalContext();

  function setToast(showToast, errorType, toastMessage) {
    setShowToast(showToast);
    setErrorType(errorType);
    setToastMessage(toastMessage);
  }

  const navigate = useNavigate();

  const [questions, setQuestions] = useState("");

  useEffect(() => {
    getQuestions().then((res) => {
      if (res.name === "AxiosError") {
        setToast(true, "error", res.message);
        return;
      }
      setQuestions(res);
      console.log("getQuestions res", res);
    });
  }, []);

  const [count, setCount] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  let total = Math.ceil(count / 10);

  useEffect(() => {
    getQuestionsRaw().then((res) => {
      setQuestions(res.results);
      console.log("getQuestions res", res);
    });
  }, []);

  useEffect(() => {
    getQuestionsRaw().then((res) => {
      setQuestions(res.results);
      console.log("getQuestions res", res);
    });
  }, [searchParams]);

  useEffect(async () => {
    let data = await getQuestionsRaw();
    setCount(data.count);
  }, []);

  // useEffect(() => {
  //   getQuestions();
  // }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
    console.log(currentPage);
  }, [currentPage]);

  return (
    <Container maxWidth="lg" sx={{ minHeight: "60vh" }}>
      <Grid container sx={{ gap: "2rem" }}>
        <Grid item>
          <SideBar />
        </Grid>
        <Grid item>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1>Последние вопросы</h1>
            <Button
              variant="contained"
              sx={{
                height: "2rem",
                backgroundColor: "#474747",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(170, 104, 0, 1);",
                  // color: '#3c52b2',
                },
              }}
              onClick={() => {
                navigate("/ask-question");
              }}
            >
              Задать вопрос
            </Button>
          </Box>
          <Box sx={{ border: "1px solid #D9D9D9", borderRadius: "0.3rem" }}>
            {questions &&
              questions.map((question) => {
                return (
                  <RenderQuestion
                    key={question.created_at}
                    username={question.author}
                    question={question.title}
                    body={question.body}
                    slug={question.slug}
                    // votesCount={question.votesCount}
                    // answersCount={question.answersCount}
                    viewsCount={question.views_count}
                    tags={question.tag}
                  />
                );
              })}
          </Box>
          <Box>
            <Pagination
              count={total}
              page={currentPage}
              onChange={(e, p) => setCurrentPage(p)}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Questions;
