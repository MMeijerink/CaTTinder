import axios from 'axios'
import settings from './apiSettings.json'
import endpoints from './endpoints'
import {CatData} from '../interfaces/CatData.interface'
import { Category } from '../interfaces/Category.interface';
import {Breed} from "../interfaces/Breed.interface"

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
export async function fetchCat(breed_id?: String, category_ids?: String) : Promise<fetchCatResponseObject>  {
  const params = <{breed_id?: String, category_ids?: String}>{};
  if(breed_id && breed_id !== ""){
      params.breed_id = breed_id;
  }
  if(category_ids && category_ids !== ""){
      params.category_ids = category_ids;
  }
  return callApi(endpoints.getRandomCat(params));
}

type fetchCatByIdResponseObject = {
  data: CatData;
};
export async function fetchCatById(pictureId : string) : Promise<fetchCatByIdResponseObject>  {
  return callApi(endpoints.getCatByPictureId(pictureId));
}

type getBreedsListResponseObject = {
  data: Array<Breed>;
};
export async function getBreedsList() : Promise<getBreedsListResponseObject>  {
  return callApi(endpoints.getBreeds());
}

type getCategoriesResponseObject = {
  data: Array<Category>;
};
export async function getCategories() : Promise<ResponseObject>  {
  return callApi(endpoints.getCategories());
}
