import { createSlice } from "@reduxjs/toolkit";

const searchSuggestionSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestion: null,
  },
  reducers: {
    addSearchSuggestion: (state, action) => {
      state.searchSuggestion = { ...state.searchSuggestion, ...action.payload };
    },
  },
});

export const { addSearchSuggestion } = searchSuggestionSlice.actions;

export default searchSuggestionSlice.reducer;
