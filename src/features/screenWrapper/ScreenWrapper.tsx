import React from "react";
import {MainWrapper, MainContainer, MainHeader, Main, MainSide} from './screenWrapperStyle'
import Toolbar from '../toolbar/Toolbar'

interface MyProps { 
    children?: React.ReactNode;
}


const ScreenWrapper: React.FC<MyProps> = (props) => {
  return (
    <MainWrapper>
        <MainSide/>
        <MainContainer>
            <MainHeader>
                <Toolbar/>
            </MainHeader>
            <Main>
                {props.children}
            </Main>
        </MainContainer>
        <MainSide/>
    </MainWrapper>
  );
};
export default ScreenWrapper