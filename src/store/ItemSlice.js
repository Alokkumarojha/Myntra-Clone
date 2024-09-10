import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      return action.payload;
    },
  },
});

export const itemAction = itemSlice.actions; // it's called named export.
export default itemSlice;
