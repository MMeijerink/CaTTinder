import { Category } from "./Category.interface";

export interface CatData {
    id?: string,
    url?: string,
    breed_ids?: Array<string>,
    breeds?: Array<any>,
    categories?: Array<Category>,
  }