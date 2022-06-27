import { getCategories } from "../api/catAPI";
import { Category } from "../interfaces/Category.interface";

/**
 * Function to fetch the categories and map the categories to a dictionary.
 * @returns {object} - The dictionary with the id as key and the name as value
*/
export const getCategoriesDictionary = async () => {
    const response = await getCategories();
    const categories = response.data;
    return categories.reduce((dictionary : {[key: string] : Object} , category : Category) => {
        const {id, name} = category;
        if(id && name){
            dictionary[id] = name;
        }
        return dictionary;
    },{})
}