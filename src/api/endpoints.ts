export default {
    getRandomCat: (searchParameters?: object) : string => {
        if(searchParameters){
            const encodedParameters = Object.entries(searchParameters)
             .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
             .join('&')

             return `https://api.thecatapi.com/v1/images/search?${encodedParameters}`;
        }
        return "https://api.thecatapi.com/v1/images/search";
    },
    getCatByPictureId: (image_id: string) : string => {
        return `https://api.thecatapi.com/v1/images/${image_id}`
    },
    getCategories: () : string => {
        return "https://api.thecatapi.com/v1/categories";
    },
    getBreeds: () : string => {
        return "https://api.thecatapi.com/v1/breeds";
    }
       
}