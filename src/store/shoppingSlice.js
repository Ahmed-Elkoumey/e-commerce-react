import { createSlice } from "@reduxjs/toolkit";



// reducers
const shoppingSlice=createSlice({
    name:'counter',
    initialState:{
        productList:[],
        cuonter:0,
    },

    reducers:{

        pushToCart :(state,action) => {
            state.cuonter+=1;
            state.productList.push(action.payload)
        },


    },
});

// Actions
export const {pushToCart} = shoppingSlice.actions

export default shoppingSlice.reducer;