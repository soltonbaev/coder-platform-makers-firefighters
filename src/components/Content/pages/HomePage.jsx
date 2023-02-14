import React from "react";
import QuestionPage from "../QA/QuestionPage";
import SideBar from "../QA/Sidebar";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "baseline",
      }}
    >
      <SideBar />
      <QuestionPage />
    </div>
  );
};

export default HomePage;
