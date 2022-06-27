import React, {useEffect, useState} from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { saveProfile, selectProfile } from "../../state/profile/ProfileSlice";
import {Profile} from "../../interfaces/Profile.interface";
import {getBreedsList, getCategories} from "../../api/catAPI"
import "./ProfileConfiguration.css"
import { Category } from "../../interfaces/Category.interface";
import { Breed } from "../../interfaces/Breed.interface";

const ProfileConfiguration: React.FC<{}> = props => {
  const dispatch = useAppDispatch();
  const stateProfile = useAppSelector(selectProfile)
  const [profile, setProfile] = useState<Profile>(stateProfile);
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [breeds, setBreeds] = useState<Array<Breed>>([]);
  const [nameError, setNameError] = useState<String>("");
  
  useEffect(() => {
    const _fetchCategories = async () => {
        const response = await getCategories();
        setCategories(response.data);
      }
      const _fetchBreeds = async () => {
        const response = await getBreedsList();
        setBreeds(response.data);
      }

      _fetchCategories().catch(console.error);
      _fetchBreeds().catch(console.error);
  }, []);


  const submitProfile = () => {
    if((profile.name === "")){
      setNameError("Name is required")
      return;
    }
    setNameError("");
    dispatch(saveProfile(profile))
  }
 
  return (
    <div className="profile-container">
      <h3>Personal:</h3>
      Name (*): 
      <input 
        value={profile.name}
        type="text" 
        onChange={(e) => setProfile({...profile, name: e.target.value})}
      />
      {(nameError !== "" && nameError)}
      <h3>Preferences:</h3>
      Breed: 
      <select 
        value={profile.preferedBreedId}  
        onChange={(e) => setProfile({...profile, preferedBreedId: e.target.value})}>
          <option value={""}>{"None"}</option>
          {breeds.map((breed) => (
            <option key={breed.id} value={breed.id}>{breed.name}</option>
          ))}
      </select>
      Category: 
      <select 
        value={profile.preferedCategoryId}  
        onChange={(e) => setProfile({...profile, preferedCategoryId: e.target.value})}>
          <option value={""}>{"None"}</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
      </select>
      &nbsp;
      <button 
        onClick={submitProfile}>Save</button>
    </div>
  );
};
export default ProfileConfiguration