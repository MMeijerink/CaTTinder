import styled from "styled-components";

export const OverviewContainer = styled.div`
flex: 1;
overflow: scroll;
display: flex;
justify-content: center;
margin: 10px;
`;

export const OverViewList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
list-style: none;
`;

export const OverViewListItem = styled.li`
width: 200px;
height: 200px;
position: relative;
cursor: pointer;

img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    border-radius: 5px;
  }
  

  `;
export const ImageOverlay = styled.li`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .5s ease;
    background-color: rgba(255,255,255, 0.8);

    &:hover {
        opacity: 1;
    }
    span {
        font-family: 'Gotham Rounded', sans-serif;
        font-size: 12pt;  
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 5px;
    }
`;

export const LoadingSpinner = styled.div`
@keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
display: flex;
justify-content: center;
width: 50px;
height: 50px;
border: 10px solid #f3f3f3; /* Light grey */
border-top: 10px solid #383636; /* Black */
border-radius: 50%;
animation: spinner 1.5s linear infinite;
` 

