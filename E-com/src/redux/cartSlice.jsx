import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState, 
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1; 
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); 
      }
      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if(item){
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if(item && item.quantity > 1){
        item.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= item.price;
      }
    },


    removeFromCart: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if(item){
        state.totalQuantity -= item.quantity;
        state.totalPrice -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((item) => item.id!== action.payload);
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
