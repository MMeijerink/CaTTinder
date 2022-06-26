import React, {useEffect, useState} from "react";
import {ProfileContainer} from "./profileStyle"

const Profile: React.FC<{}> = props => {
 
  return (
    <ProfileContainer>
      <h3>Personal:</h3>
      Name: <input type="text"/>
      <h3>Preferences:</h3>
      Breed: <input type="text"/>
      Category: <input type="text"/>
    </ProfileContainer>
  );
};
export default Profile