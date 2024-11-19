import { ADD_TO_LIKED } from "./constantsTerms";
const initialState={
    likedImages:[],
};
export const Likereducer=(state=initialState,action)=>{
switch(action.type){
    case ADD_TO_LIKED:
        return {
            ...state,
            likedImages: [...state.likedImages, action.payload],
          };
        default:
            return state
}
}