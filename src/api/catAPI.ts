import axios from 'axios'
import settings from './apiSettings.json'
import endpoints from './endpoints'
import {CatData} from '../interfaces/CatData.interface'

type ResponseObject = {
  data: any;
};

async function callApi(endpoint : string) : Promise<ResponseObject>  {
  const headers = { 'x-api-key': settings.key}
  try {
    return await axios.get(endpoint, {headers});
  }catch(error){
    console.log(error);
  }
  return {data: {}};
}

type fetchCatResponseObject = {
  data: Array<CatData>;
};
export async function fetchCat() : Promise<fetchCatResponseObject>  {
  return callApi(endpoints.getRandomCat());
}

type fetchCatByIdResponseObject = {
  data: CatData;
};
export async function fetchCatById(pictureId : string) : Promise<fetchCatByIdResponseObject>  {
  return callApi(endpoints.getCatByPictureId(pictureId));
}

export async function getBreedsList() : Promise<ResponseObject>  {
  return callApi(endpoints.getBreeds());
}

export async function getCategories() : Promise<ResponseObject>  {
  return callApi(endpoints.getCategories());
}
