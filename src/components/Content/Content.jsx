import React from "react";
import MainRoutes from "../../MainRoutes";
import MiniMenu from "../Header/MiniMenu";

const Content = () => {
  return (
    <>
      <MiniMenu></MiniMenu>
      <MainRoutes />
    </>
  );
};

export default Content;
