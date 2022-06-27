import { getBreedsList } from "../api/catAPI";
import {Breed} from "../interfaces/Breed.interface"

export const getBreedsDictionary = async () => {
    const response = await getBreedsList();
    const breeds = response.data;
    return breeds.reduce((dictionary : {[key: string] : Object} , breed : Breed) => {
        const {id, name} = breed;
        dictionary[id] = name;
        return dictionary;
    },{})
}