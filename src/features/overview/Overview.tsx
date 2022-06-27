import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { fetchCatById } from "../../api/catAPI";
import { useAppSelector } from "../../state/hooks";
import { selectRatedCats } from "../../state/ratedCats/RatedCatsSlice";
import { getBreedsDictionary } from "../../helpers/breedsHelper";
import { CatData } from "../../interfaces/CatData.interface";
import { RateType } from "../../interfaces/RateType";
import "./Overview.css";

/**
 * The overview screen component
*/
const Overview: React.FC<{}> = props => {
 
  const [catsData, setCatsData] = useState<Array<CatData>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [breedsDictionary, setBreedsDictionary] = useState(Object);
  const location = useLocation();
  const rate = (location.pathname == "/dislikedCats" ? RateType.Dislike : RateType.Like);
  const catIds = useAppSelector(selectRatedCats(rate));

  /**
   * Get the dictionary object that can be used to map the breeds from id to name
  */
  useEffect(() => {
    const fetchBreedsDictionary = async() => {
      const breedsDictionary = await getBreedsDictionary();
      setBreedsDictionary(breedsDictionary)
    }

    fetchBreedsDictionary().catch(console.error);
  }, []);

  /**
   * Get the up-to-date catData from the server (one by one)
  */
  useEffect(() => {
    const fetchRatedCatData = async () => {
      setCatsData([]);
      setIsLoading(true);
      let catsData : Array<CatData> = [];
      for (const catId of catIds) {
        //we can't fetch multiple catPictures by id in one call :( 
        const response = await fetchCatById(catId);
        catsData.push(response.data)
      }
      setCatsData(catsData);
      setIsLoading(false);
    }

    fetchRatedCatData().catch(console.error);
  }, [rate]);
 
  /**
   * Renders the cat card in the overview
   * @param {CatData} catData - the data of the cat that should be rendered
   * @returns The DOM nodes for the cat card in the overview 
   */
  const renderCatItem = (catData: CatData) => {
    const {id, url, categories = [], breed_ids = []} = catData
    const categoryNames = categories.map( category => category.name);
    const breedNames = breed_ids.map( id => breedsDictionary[id]);
    return (
      <li className="overview-list-item">
        <img src={url}/>
        <div className="overview-list-item-image-overlay">
          <span>
          <a>id: {id}</a>
          { breedNames.length > 0 && <a>breeds: {breedNames.toString()}</a>}
          { categoryNames.length > 0 &&<a>categories: {categoryNames.toString()}</a>}
          </span>
        </div>
      </li>
      )
  }

  /**
   * Renders the cat overview containing the child components
   * @returns The DOM nodes for the cat overview 
   */
  return (
    <div className="overview-container">
      <ul className="overview-list">
      {catsData.map(catData => renderCatItem(catData))}
        
      </ul>
      {isLoading  && <span className="loading-spinner" /> }
    </div>
  );
};
export default Overview