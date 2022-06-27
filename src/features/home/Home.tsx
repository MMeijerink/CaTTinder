import React, {useEffect, useState} from "react";
import { useAppSelector, useAppDispatch } from '../../state/hooks'
import { fetchCatData, selectCat } from '../../state/cat/CatSlice'
import { rateCat } from '../../state/ratedCats/RatedCatsSlice'
import { RateType } from "../../interfaces/RateType";
import { getBreedsDictionary } from "../../helpers/breedsHelper";
import "./Home.css";
import { selectProfile } from "../../state/profile/ProfileSlice";

/**
 * The home screen component
*/
const Home: React.FC<{}> = props => {
  const cat = useAppSelector(selectCat)
  const profile = useAppSelector(selectProfile)
  const {preferedBreedId, preferedCategoryId} = profile;
  const dispatch = useAppDispatch()
  const [breedsDictionary, setBreedsDictionary] = useState(Object);

  /**
   * Fetch a new cat picture using the preferences, when we don't have one.
  */
  useEffect(() => {
    if(!cat.id){
      dispatch(fetchCatData({preferedBreedId, preferedCategoryId}));
    }
  }, [dispatch]);

  /**
   * Fetch a dicitonary object for all cat breeds
  */
  useEffect(() => {
    const fetchBreedsDictionary = async() => {
      const breedsDictionary = await getBreedsDictionary();
      setBreedsDictionary(breedsDictionary)
    }

    fetchBreedsDictionary().catch(console.error);
  }, []);

  const {id = "", url, categories = [], breed_ids = []} = cat
  const categoryNames = categories.map( category => category.name);
  const breedNames = breed_ids.map( id => breedsDictionary[id]);

  /**
   * Renders the home page contining the cat picture and the like and dislike buttons.
   * @returns The DOM nodes for the home screen 
  */
  return (
    <div className="swipe-container">
       <div className="image-container">
          <button 
            className="dislike-button"
            onClick={() => {
               dispatch(rateCat({id, rate: RateType.Dislike}));
               dispatch(fetchCatData({preferedBreedId, preferedCategoryId}));
               }}
            >
          &#128574;
          </button>
          <div className="image-frame">
            <img src={url}/>
            <span>
              {
                `id: ${id}
                ${breedNames.length ? `, breeds: ${breedNames}` : ''}
                ${categoryNames.length ? `, categories: ${categoryNames}` : ''}`
              }
            </span>
          </div>
          <button 
            className="like-button" 
            onClick={() => {
              dispatch(rateCat({id, rate: RateType.Like}));
              dispatch(fetchCatData({preferedBreedId, preferedCategoryId}));
            }}
          >
          &#128571;
          </button>
        </div>
    </div>
  );
};
export default Home;