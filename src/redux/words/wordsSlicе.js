import { createSlice } from "@reduxjs/toolkit";
import {
  addNewWord,
  deleteWord,
  editWord,
  getAllWords,
  getCategories,
  getStatistics,
  getUserWords,
} from "./wordsOperation";

const initialState = {
  allWords: {
    results: [],
    totalPages: null,
    page: 1,
    perPage: 7,
  },
  userWords: {
    results: [],
    totalPages: null,
    page: 1,
    perPage: 7,
  },
  categories: null,
  statistics: null,
  isLoading: false,
  isModalAddWordOpen: false,
};
const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    openModalAddWord(state) {
      state.isModalAddWordOpen = true;
    },
    closeModalAddWord(state) {
      state.isModalAddWordOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllWords.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllWords.fulfilled, (state, { payload }) => {
        state.allWords = {
          ...state.allWords,
          results: [...state.allWords.results, ...payload.results],
          totalPages: payload.totalPages,
          page: payload.page,
          perPage: payload.perPage,
        };
        state.isLoading = false;
      })
      .addCase(getAllWords.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getCategories.pending, (state, action) => {
        // state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, { payload }) => {
        state.categories = payload;
        // state.isLoading = false;
      })
      .addCase(getCategories.rejected, (state, action) => {
        // state.isLoading = false;
      })
      .addCase(getStatistics.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getStatistics.fulfilled, (state, { payload }) => {
        state.statistics = payload;
        state.isLoading = false;
      })
      .addCase(getStatistics.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getUserWords.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUserWords.fulfilled, (state, { payload }) => {
        state.userWords.results = payload.results;
        state.userWords.totalPages = payload.totalPages;
        state.userWords.page = payload.page;
        state.userWords.perPage = payload.perPage;
        state.isLoading = false;
      })
      .addCase(getUserWords.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNewWord.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addNewWord.fulfilled, (state, { payload }) => {
        state.statistics.totalCount = state.statistics.totalCount + 1;
        state.isLoading = false;
      })
      .addCase(addNewWord.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(deleteWord.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteWord.fulfilled, (state, { payload }) => {
        state.userWords.results = state.userWords.results.filter(
          (word) => word._id !== payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteWord.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editWord.fulfilled, (state, { payload }) => {
        state.userWords.results = state.userWords.results.map((word) => {
          if (word._id === payload._id) {
            return { ...word, ...payload };
          }
          return word;
        });
      });
  },
});
export const { openModalAddWord, closeModalAddWord } = wordsSlice.actions;

export default wordsSlice.reducer;
