import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (store, action) => {
      store.push(action.payload);
    },
    removeFromBag: (store, action) => {
      return store.filter((itemid) => itemid !== action.payload);
    },
  },
});

export const bagAction = bagSlice.actions; // it's called named export.
export default bagSlice;
