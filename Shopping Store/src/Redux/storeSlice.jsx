import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
  name: 'storeSlice',
  initialState: {
    addToCart: [],
    totalPrice: 0,
    orders: []
  },
  reducers: {
    incrementCart: (state, action) => {
      state.addToCart.push(action.payload);
      state.totalPrice = state.addToCart.reduce((acc, item) => acc + item.price, 0);
    },
    removeFromCart: (state, action) => {
      state.addToCart = state.addToCart.filter((item) => item.id !== action.payload);
      state.totalPrice = state.addToCart.reduce((acc, item) => acc + item.price, 0);
    },
    placeOrder : (state) => {
      state.orders = [...state.orders, ...state.addToCart]
      state.addToCart = []
      state.totalPrice=0
    }
  },
});

export const { incrementCart, removeFromCart, placeOrder } = storeSlice.actions;
export default storeSlice.reducer;
