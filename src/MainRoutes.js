import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Auth from './components/Content/Authorization/Auth';
import FindGroups from './components/Content/Groups/FindGroups';
import Questions from './components/Content/Home/Questions';
import Tags from './components/Content/Home/Tags';
import Users from './components/Content/Home/Users';
import ProfilePage from './components/Content/Profile/ProfilePage';

const MainRoutes = () => {
   return (
      <Routes>
         <Route path="/" element={<Questions />} />
         <Route path="/tags" element={<Tags />} />
         <Route path="/users" element={<Users />} />
         <Route path="/groups" element={<FindGroups />} />
         <Route path="/auth" element={<Auth />} />
         <Route path="/my-profile" element={<ProfilePage />} />
      </Routes>
   );
};

export default MainRoutes;
