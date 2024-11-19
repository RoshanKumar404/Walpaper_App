import { configureStore } from '@reduxjs/toolkit'
import rootreducer from './rootreducer'
import { Likereducer } from './reducer';
const store =configureStore({
    reducer:rootreducer
})

export default store;