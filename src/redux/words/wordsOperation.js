import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWordsByCategory = createAsyncThunk(
  "words/getWordsByCategory",
  async ({ category, query }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`/words/all/${category}`, {
        params: { search: query },
      });

      const data = response.data;
      // Повернення даних для збереження в Redux store
      return data;
    } catch (error) {
      console.error("Помилка при отриманні слів за категорією:", error);
      return rejectWithValue(error.message);
    }
  }
);

export const getAllWords = createAsyncThunk(
  "words/getAllWords",
  async ({ rejectWithValue, searchQuery }) => {
    console.log(searchQuery);
    try {
      const { data } = await axios.get("/words/all", {
        params: { keyword: searchQuery },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "words/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/words/categories");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
