import { createSlice } from "@reduxjs/toolkit";


export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0,
    },
    reducers:{
        increment:(state)=>state=state+1,
        decrement:(state)=>state=state-1,

    }
})

export const {increment,decrement}=counterSlice.actions;

export default counterSlice.reducer 