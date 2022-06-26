import styled from "styled-components";

export const SwipeContainer = styled.div`
flex: 1;
`;

export const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
position: relative;

.dislike-button,
.like-button {
    position: absolute;
    padding: 10px;
    z-index: 2;
    width: 12%;
    height: 100%;
    font-size: 20pt;
    border:none;
    background: transparent;
    text-shadow: 0 0 5px white, 0 0 5px white, 0 0 5px white, 0 0 5px white;
    position: absolute;

    &:hover {
        background: rgba(220, 220, 220, 0.5);
        cursor: pointer;
    }
    &:before {
        content: ' ';
        display: block;
        /* adjust 'height' to position overlay content vertically */
      }
} 

.dislike-button {
    top: 0;
    bottom: 0;
    left: 0;
    text-align: left;

}
.like-button {
    top: 0;
    bottom: 0;
    right: 0;
    text-align: right;

}
`;

export const ImageFrame = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: calc(36vw);
width: 80%;
border: 10px solid #fff;
background-color: white;
-webkit-box-shadow: 3px 3px 3px #777;
   -moz-box-shadow: 3px 3px 3px #777;
        box-shadow: 3px 3px 3px #777;

span {
    height: 20px;
    font-family: 'Gotham Rounded', sans-serif;
    font-size: 14pt;
}
img { 
    vertical-align: middle;
    margin: 0 auto;
    object-fit: cover;
    width: 100%;
    height: calc(100% - 20px);
}
`;