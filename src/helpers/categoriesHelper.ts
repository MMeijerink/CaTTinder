import { getCategories } from "../api/catAPI";
import { Category } from "../interfaces/Category.interface";

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