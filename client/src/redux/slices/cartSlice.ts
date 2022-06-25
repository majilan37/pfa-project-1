import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  quantity: number;
  productName: string;
  price: number;
  isOpen: boolean;
}

const initialState: InitialState = {
  quantity: 0,
  productName: "Braclet",
  price: 140.0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state: InitialState) => {
      state.quantity += 1;
    },

    decrementQuantity: (state: InitialState) => {
      state.quantity -= 1;
    },

    resetQuantity: (state: InitialState) => {
      state.quantity = 0;
    },

    setIsOpen: (state: InitialState, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const {
  decrementQuantity,
  incrementQuantity,
  resetQuantity,
  setIsOpen,
} = cartSlice.actions;
export default cartSlice.reducer;
