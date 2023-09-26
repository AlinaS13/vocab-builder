import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllWords = createAsyncThunk(
  "words/getAllWords",
  async ({ rejectWithValue, queryParams }) => {
    try {
      const { data } = await axios.get("/words/all", {
        params: { ...queryParams },
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
