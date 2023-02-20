import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../contexts/GlobalContextProvider";
import { getQuestions } from "../../../helpers/read";
const Activity = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(async () => {
    let data = await getQuestions();
    setQuestions(data);
  }, []);
  const { user } = useGlobalContext();
  console.warn(questions);

  const Questions = () => {
    let res = 0;
    questions.map((i) => {
      if (user.id === i.author) {
        res += 1;
      }
    });

    return res;
  };

  const viewsCount = () => {
    let res = 0;
    questions.map((i) => {
      if (user.id === i.author) {
        res += i.views_count;
      }
    });

    return res;
  };

  return (
    <div>
      <center>
        <Typography variant="h3">Cтатистика</Typography>
      </center>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-around",
          with: "800px",
          height: "120px",
          border: "1px black solid",
        }}
      >
        <Grid item>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "1ppx",
            }}
          >
            Вопросов:
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "47px",
              fontStyle: "normal",
              color: "#AA6800",
            }}
          >
            {Questions()}
          </Typography>
        </Grid>
        <Grid item>
          {" "}
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "1ppx",
            }}
          >
            Ответов:
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "47px",
              fontStyle: "normal",
              color: "#AA6800",
            }}
          >
            666
          </Typography>
        </Grid>
        <Grid item>
          {" "}
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "1ppx",
            }}
          >
            Охват:
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "47px",
              fontStyle: "normal",
              color: "#AA6800",
            }}
          >
            {viewsCount()}
          </Typography>
        </Grid>
        <Grid item>
          {" "}
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "1ppx",
            }}
          >
            репутация:
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "40px",
              lineHeight: "47px",
              fontStyle: "normal",
              color: "#AA6800",
            }}
          >
            {user.average_rating}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Activity;
