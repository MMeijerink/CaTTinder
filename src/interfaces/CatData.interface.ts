import { Category } from "./Category.interface";

// Define a type for the slice state
export interface CatData {
    id?: string,
    url?: string,
    breed_ids?: Array<string>,
    categories?: Array<Category>,
  
  }