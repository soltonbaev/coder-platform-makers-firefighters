import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Content/Authorization/Auth";
import Login from "./components/Content/Authorization/Login";
import FindGroups from "./components/Content/Groups/FindGroups";
import Questions from "./components/Content/Home/Questions";
import RenderUserProfile from "./components/Content/Home/RenderUserProfile";
import Tags from "./components/Content/Home/Tags";
import Users from "./components/Content/Home/Users";
import EditProfile from "./components/Content/Profile/EditProfile";
import ProfilePage from "./components/Content/Profile/ProfilePage";

import AskQuestion from "./components/Content/QA/AskQuestion";
import QuestionPage from "./components/Content/QA/QuestionPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Questions />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/users" element={<Users />} />
      <Route path="/groups" element={<FindGroups />} />
      <Route path="/ask-question" element={<AskQuestion />} />
      <Route path="/questions/:id" element={<QuestionPage />} />
      <Route path="/users/:id" element={<RenderUserProfile />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/my-profile" element={<ProfilePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/editProfile" element={<EditProfile />} />
    </Routes>
  );
};

export default MainRoutes;
