import React from "react";
import { Route, Routes, } from "react-router-dom";

import Home from "../features/home/Home";
import Profile from "../features/profile/Profile";
import Overview from "../features/overview/Overview";
import ScreenWrapper from "../features/screenWrapper/ScreenWrapper";

const ApplicationRoutes: React.FC = () => (
    <Routes>
    <Route path="/" element={(<ScreenWrapper><Home/></ScreenWrapper>)}/>
    <Route path="/profile" element={(<ScreenWrapper><Profile/></ScreenWrapper>)}/>
    <Route path="/dislikedCats" element={(<ScreenWrapper><Overview/></ScreenWrapper>)}/>
    <Route path="/likedCats" element={(<ScreenWrapper><Overview/></ScreenWrapper>)}/>
    <Route path='*' element={(<ScreenWrapper><Home/></ScreenWrapper>)} />
  </Routes>
);

export default ApplicationRoutes;