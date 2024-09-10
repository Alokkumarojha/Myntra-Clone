import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, // false=pending, true=done.
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (store) => {
      store.fetchDone = true;
    },

    FetchingStart: (store) => {
      store.currentlyFetching = true;
    },
    FetchingFinished: (store) => {
      store.currentlyFetching = false;
    },
  },
});

export const fetchStatusAction = fetchStatusSlice.actions; // it's called named export.
export default fetchStatusSlice;
