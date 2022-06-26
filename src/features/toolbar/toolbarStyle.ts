import styled from "styled-components";

export const ToolbarContainer = styled.div`
height: 100%;
width: calc(100%-80px); 
background-color: #EEE;
padding: 0px 40px;
justify-content: space-between;
align-items: center;
display: flex;

`;

export const ButtonGroup = styled.div`
    button {
        border: none;
        padding: 5px 10px;
        margin: 3px;
        border-radius: 20px;
        background: rgba(220, 220, 220, 0.5);
        font-family: 'Gotham Rounded', sans-serif;
        font-size: 18pt;

        :hover {
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
        }
    }
    &.title {
    padding: 5px 10px;
    border-radius: 20px;
    background: transparent;
    }
`;