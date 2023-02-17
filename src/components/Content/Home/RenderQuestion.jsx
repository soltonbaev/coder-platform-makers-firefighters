import { Avatar, Box, Grid } from "@mui/material";
import React from "react";

const RenderQuestion = ({
  votesCount,
  answersCount,
  viewsCount,
  question,
  tags,
  username,
  isAnswered,
  userPic,
}) => {
  return (
    <Grid
      container
      sx={{
        gap: "1rem",
        alignItems: "center",
        padding: "1rem",
        borderStyle: "none",
        borderBottom: "1px solid #D9D9D9",
      }}
    >
      <Grid
        item
        container
        direction="row"
        sx={{ fontSize: "0.7rem", gap: "1rem" }}
      >
        <Grid item>{votesCount} голосов</Grid>
        <Grid item>{answersCount} ответ</Grid>
        <Grid item>{viewsCount} просмотров</Grid>
      </Grid>
      <Grid item container sx={{ gap: "1rem" }}>
        <Grid item>{question}</Grid>

        <Grid
          item
          container
          direction="row"
          sx={{ justifyContent: "space-between" }}
        >
          <Grid
            item
            sx={{ display: "flex", fontSize: "0.8rem", gap: "0.5rem" }}
          >
            {tags?.map((tag) => {
              return (
                <Grid
                  key={tag}
                  item
                  sx={{
                    border: "1px solid #AA6800",
                    padding: "0.1rem 0.3rem",
                    borderRadius: "0.3rem",
                    color: "#AA6800",
                  }}
                >
                  {tag}
                </Grid>
              );
            })}
          </Grid>
          <Grid
            item
            sx={{ display: "flex", gap: "0.5rem", fontSize: "0.8rem" }}
          >
            <Avatar sx={{ width: "1rem", height: "1rem" }}></Avatar> {username}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RenderQuestion;
