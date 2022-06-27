import React from "react";
import { Route, Routes, } from "react-router-dom";

import Home from "../features/home/Home";
import Profile from "../features/profile/ProfileConfiguration";
import Overview from "../features/overview/Overview";
import MainScreen from "../features/mainScreen/MainScreen";

const ApplicationRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={(<MainScreen><Home/></MainScreen>)}/>
    <Route path="/profile" element={(<MainScreen><Profile/></MainScreen>)}/>
    <Route path="/dislikedCats" element={(<MainScreen><Overview/></MainScreen>)}/>
    <Route path="/likedCats" element={(<MainScreen><Overview/></MainScreen>)}/>
    <Route path='*' element={(<MainScreen><Home/></MainScreen>)} />
  </Routes>
);

export default ApplicationRoutes;