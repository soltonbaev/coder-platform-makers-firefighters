import { Box } from "@mui/system";
import React from "react";
import RenderQuestion from "../Home/RenderQuestion";

const Saved = () => {
  let questions = JSON.parse(localStorage.getItem("notes"));
  return (
    <div>
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
    </div>
  );
};

export default Saved;
