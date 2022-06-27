import React from "react";
import Toolbar from '../toolbar/Toolbar'
import "./MainScreen.css";

/**
 * Interface for the main screen properties
*/
interface MainScreenProps { 
    children?: React.ReactNode;
}

/**
 * The main screen wrapper component
*/
const MainScreen: React.FC<MainScreenProps> = (props) => {
    /**
     * Renders the main page wrapper including the children.
     * @returns The DOM nodes for the main screen 
     */
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