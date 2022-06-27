import React from "react";
import Toolbar from '../toolbar/Toolbar'
import "./MainScreen.css";

interface MyProps { 
    children?: React.ReactNode;
}

const MainScreen: React.FC<MyProps> = (props) => {
  return (
    <div className="main-wrapper">
        <div className="main-side"/>
        <div className="main-container">
            <div className="main-header">
                <Toolbar/>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
        <div className="main-side"/>
    </div>
  );
};
export default MainScreen