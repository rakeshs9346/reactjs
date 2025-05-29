import {configureStore} from '@reduxjs/toolkit'
import countReducer from '../features/counter/counterSlice'

export const store=configureStore({
    reducer:{
        counter:countReducer
    }
})

//steps
//1.create store
//2.wrap app component in Provider
//3.create slice
//4.update reducer in store 