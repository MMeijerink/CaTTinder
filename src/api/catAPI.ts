import axios from 'axios'
import settings from './apiSettings.json'
import endpoints from './endpoints'
import {CatData} from '../interfaces/CatData.interface'
import { Category } from '../interfaces/Category.interface';
import {Breed} from "../interfaces/Breed.interface"

/**
 * Generic response object return type
*/
type ResponseObject = {
  data: any;
};

/**
 * Generic function to call the api
 * @param {string} endpoint - The endpoint url that should be called including the url parameters
 * @returns {object} - The response object including the response data
*/
async function callApi(endpoint : string) : Promise<ResponseObject>  {
  const headers = { 'x-api-key': settings.key}
  try {
    return await axios.get(endpoint, {headers});
  }catch(error){
    console.log(error);
  }
  return {data: {}};
}

/**
 * FetchCat tesponse object return type
*/
type fetchCatResponseObject = {
  data: Array<CatData>;
};

/**
 * Function to call the Fetch Cat endpoint
 * @param {string} breed_id - The breed id on which we want to filter  
 * @param {string} category_ids - The category ids on which we want to filter
 * @returns {object} - The response object including the response data
*/
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

/**
 * FetchCatById response object return type
*/
type fetchCatByIdResponseObject = {
  data: CatData;
};

/**
 * Function to call the Fetch Cat By Id endpoint
 * @param {string} pictureId - The id of the cat picture
 * @returns {object} - The response object including the response data
*/
export async function fetchCatById(pictureId : string) : Promise<fetchCatByIdResponseObject>  {
  return callApi(endpoints.getCatByPictureId(pictureId));
}

/**
 * GetBreeds response object return type
*/
type getBreedsListResponseObject = {
  data: Array<Breed>;
};

/**
 * Function to call the Get Breedslist endpoint
 * @returns {object} - The response object including the response data
*/
export async function getBreedsList() : Promise<getBreedsListResponseObject>  {
  return callApi(endpoints.getBreeds());
}

/**
 * GetCategories response object return type
*/
type getCategoriesResponseObject = {
  data: Array<Category>;
};

/**
 * Function to call the Get Categories endpoint
 * @returns {object} - The response object including the response data
*/
export async function getCategories() : Promise<ResponseObject>  {
  return callApi(endpoints.getCategories());
}
