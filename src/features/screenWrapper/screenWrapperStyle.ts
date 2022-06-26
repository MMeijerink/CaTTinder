import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    height: 100vh;
    margin: 0;
`;

export const MainContainer = styled.div`
display: flex;
flex: 1;
flex-direction: column;
`;
export const MainHeader = styled.div`
height: 10vh;
background-color: #EEE;
border-bottom: 1px solid #666
`;

export const Main = styled.div`
flex: 1;
display: flex;
height: calc(100vh - 10vh);
background-color: #EEE;
`;

export const MainSide = styled.div`
flex: 0 0 24vw;
background: #444;
`;