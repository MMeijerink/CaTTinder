import React from "react";
import "./Toolbar.css";
import { useNavigate } from "react-router-dom";

const Toolbar: React.FC<{}> = props => {
  let navigate = useNavigate();
  return (
    <div className="toolbar-container">
      <div className="button-group">
        <button  
          onClick={() => { navigate('/profile') }}
        >
          Profile
        </button>
      </div>
      <div className="button-group title">
        <button  
          onClick={() => { navigate('/') }}
        >
          CaTTinder
        </button>
      </div>
      <div className="button-group title">
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
      </div>

    </div>
  );
};

export default Toolbar