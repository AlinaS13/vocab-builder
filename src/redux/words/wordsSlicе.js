import { createSlice } from "@reduxjs/toolkit";
import { getAllWords, getCategories } from "./wordsOperation";

const initialState = {
  allWords: {
    results: [],
    totalPages: null,
    page: null,
    perPage: null,
  },
  categories: null,
  isLoading: false,
};
const wordsSlice = createSlice({
  name: "words",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllWords.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllWords.fulfilled, (state, { payload }) => {
        state.allWords.results.push(...payload.results);
        state.allWords.totalPages = payload.totalPages;
        state.allWords.page = payload.page;
        state.allWords.perPage = payload.perPage;
        state.isLoading = false;
      })
      .addCase(getAllWords.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default wordsSlice.reducer;
