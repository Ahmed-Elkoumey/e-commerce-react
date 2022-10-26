import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productList: [],
  }


// reducers
const shoppingSlice = createSlice({
  name: "counter",
  initialState,

  reducers: {
    pushToCart: (state, action) => {

      const dupplicated=state.productList.find((prod)=> prod.id===action.payload.id); 

   

      if (dupplicated) {

        dupplicated.quantity+=1;

      }else{
        const clone ={...action.payload,quantity:1}
        state.productList.push(clone);
      }
    },

    decreaseItem :(state, action)=>{
      const itemDub=state.productList.find((prod)=> prod.id===action.payload.id); 
        itemDub.quantity -= 1 ;
  
    }
    ,
    removeFromCart: (state, action) => {
     state.productList.splice(action.payload,1)
      
    },
    clearAll: (state, action) => {
      state.productList.splice(0,action.payload.length)
    },
  },
});

// Actions
export const { pushToCart, removeFromCart, clearAll,decreaseItem } = shoppingSlice.actions;

export default shoppingSlice.reducer;
