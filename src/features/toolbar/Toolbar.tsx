import React from "react";
import {ToolbarContainer, ButtonGroup} from './toolbarStyle'
import { useNavigate } from "react-router-dom";



const Toolbar: React.FC<{}> = props => {
  let navigate = useNavigate();
  return (
    <ToolbarContainer>
      <ButtonGroup>
        <button  
          onClick={() => { navigate('/profile') }}
        >
          Profile
        </button>
      </ButtonGroup>
      <ButtonGroup className="title">
        <button  
          onClick={() => { navigate('/') }}
        >
          CaTTinder
        </button>
      </ButtonGroup>
      <ButtonGroup>
        <button  
          onClick={() => { navigate('/dislikedCats') }}
        >
          &#128574;
        </button>
        <button  
          onClick={() => { navigate('/likedCats') }}
        >
          &#128571;
        </button>
      </ButtonGroup>

    </ToolbarContainer>
  );
};

export default Toolbar