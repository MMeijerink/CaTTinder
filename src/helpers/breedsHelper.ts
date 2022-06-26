import { getBreedsList } from "../api/catAPI";

export const getBreedsDictionary = async () => {
        const response = await getBreedsList();
        const breeds = response.data;
        type breed = {
            id: string,
            name: string,
        }
        return breeds.reduce((dictionary : {[key: string] : Object} , breed : breed) => {
            const {id, name} = breed;
            dictionary[id] = name;
            return dictionary;
        },{})
        
}