import React, {useEffect, useState} from "react";
import {SwipeContainer, ImageContainer, ImageFrame} from "./homeStyle"
import { useAppSelector, useAppDispatch } from '../../app/state/hooks'
import { fetchCatData, selectCat } from '../../app/state/cat/CatSlice'
import { rateCat } from '../../app/state/ratedCats/RatedCats'
import { RateType } from "../../interfaces/RateType";
import { getBreedsDictionary } from "../../helpers/breedsHelper";

// import { ApplicationState } from "../../store";
// import { Cart } from "../../store/cart/types";

const Home: React.FC<{}> = props => {
  const cat = useAppSelector(selectCat)
  const dispatch = useAppDispatch()
  const [breedsDictionary, setBreedsDictionary] = useState(Object);

  useEffect(() => {
    if(!cat.id){
      dispatch(fetchCatData());
    }
  }, [dispatch]);

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

  return (
    <SwipeContainer>
       <ImageContainer>
          <button 
            className="dislike-button"
            onClick={() => {
               dispatch(rateCat({id, rate: RateType.Dislike}));
               dispatch(fetchCatData());
               }}
            >
          &#128574;
          </button>
          <ImageFrame>
            <img src={url}/>
            <span>{
            `id: ${id}
            ${breedNames.length ? `, breeds: ${breedNames}` : ''}
            ${categoryNames.length ? `, categories: ${categoryNames}` : ''}`
            }</span>
          </ImageFrame>
          <button 
            className="like-button" 
            onClick={() => {
              dispatch(rateCat({id, rate: RateType.Like}));
              dispatch(fetchCatData());
            }}
          >
          &#128571;
          </button>
        </ImageContainer>
    </SwipeContainer>
  );
};
export default Home;