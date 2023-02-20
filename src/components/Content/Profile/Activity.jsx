import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Activity = () => {
  return (
    <div>
      <center>
        <Typography variant="h3">Cтатистика</Typography>
      </center>
      <Box
        sx={{
          with: "800px",
          height: "120px",
          border: "1px black solid",
        }}
      ></Box>
    </div>
  );
};

export default Activity;
