import { combineReducers } from "@reduxjs/toolkit";
import { Likereducer } from "./reducer";

// Export the combined reducers
const rootreducer = combineReducers({
    Likereducer, 
});

//console.log(rootreducer)
export default rootreducer;
