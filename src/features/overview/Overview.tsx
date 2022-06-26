import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { fetchCatById } from "../../api/catAPI";
import { useAppSelector } from "../../app/state/hooks";
import { selectRatedCats } from "../../app/state/ratedCats/RatedCats";
import { getBreedsDictionary } from "../../helpers/breedsHelper";
import { CatData } from "../../interfaces/CatData.interface";
import { RateType } from "../../interfaces/RateType";
import {OverviewContainer, OverViewList,OverViewListItem, LoadingSpinner, ImageOverlay} from "./overviewStyle"

const Profile: React.FC<{}> = props => {
 
  const [catsData = [], setCatsData] = useState<Array<CatData>>();
  const [isLoading, setIsLoading] = useState(false);
  const [breedsDictionary, setBreedsDictionary] = useState(Object);

  const location = useLocation();
  const rate = (location.pathname == "/dislikedCats" ? RateType.Dislike : RateType.Like);
  const catIds = useAppSelector(selectRatedCats(rate));

  useEffect(() => {
    const fetchBreedsDictionary = async() => {
      const breedsDictionary = await getBreedsDictionary();
      setBreedsDictionary(breedsDictionary)
    }

    fetchBreedsDictionary().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchRatedCatData = async () => {
      setCatsData([]);
      setIsLoading(true);
      let catsData : Array<CatData> = [];
      for (const catId of catIds) {
        //we can't fetch multiple catPictures by id in one call :( 
        const response = await fetchCatById(catId);
        catsData.push(response.data)
        console.log(catsData);
      }
      setCatsData(catsData);
      setIsLoading(false);
    }

    fetchRatedCatData().catch(console.error);
  }, [rate]);
 

const renderCatItem = (catData: CatData) => {
  const {id, url, categories = [], breed_ids = []} = catData
  const categoryNames = categories.map( category => category.name);
  const breedNames = breed_ids.map( id => breedsDictionary[id]);
  return (
    <OverViewListItem>
          <img src={url}/>
          <ImageOverlay>
            <span>
            <a>id: {id}</a>
            { breedNames.length > 0 && <a>breeds: {breedNames.toString()}</a>}
            { categoryNames.length > 0 &&<a>categories: {categoryNames.toString()}</a>}
            </span>
          </ImageOverlay>
        </OverViewListItem>
        )
}

  return (
    <OverviewContainer>
      <OverViewList>
      {catsData.map(catData => renderCatItem(catData))}
        
      </OverViewList>
      {isLoading  && <LoadingSpinner /> }
    </OverviewContainer>
  );
};
export default Profile