import { getBreedsList } from "../api/catAPI";
import {Breed} from "../interfaces/Breed.interface"

/**
 * Function to fetch the breeds and map the breeds to a dictionary.
 * @returns {object} - The dictionary with the id as key and the name as value
*/
export const getBreedsDictionary = async () => {
    const response = await getBreedsList();
    const breeds = response.data;
    return breeds.reduce((dictionary : {[key: string] : Object} , breed : Breed) => {
        const {id, name} = breed;
        dictionary[id] = name;
        return dictionary;
    },{})
}