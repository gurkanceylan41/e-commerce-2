import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        state.carts = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            const updatedQty = item.quantity + action.payload.quantity;
            return {
              ...item,
              quantity: updatedQty,
              totalPrice: updatedQty * item.price,
            };
          }
          return item;
        });
      } else {
        const newItem = {
          ...action.payload,
          totalPrice: action.payload.quantity * action.payload.price,
        };
        state.carts.push(newItem);
      }

      storeInLocalStorage(state.carts);
      cartSlice.caseReducers.getCartTotal(state); // Update totals
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
      storeInLocalStorage(state.carts);
      cartSlice.caseReducers.getCartTotal(state); // Update totals
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
      cartSlice.caseReducers.getCartTotal(state); // Reset totals
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      state.itemCount = state.carts.reduce(
        (count, item) => count + item.quantity,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
