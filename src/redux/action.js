import { ADD_TO_LIKED } from "./constantsTerms";
 export function addtoliked(image){
    return{
        type:ADD_TO_LIKED,
        payload:image,

    }
}