import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { toast } from "react-toastify";

export const getWordsByCategory = createAsyncThunk(
  "words/getWordsByCategory",
  async ({ category, query }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`/words/all/${category}`, {
        params: { search: query },
      });

      // setAuthHeader(token);

      const data = response.data;
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
      return rejectWithValue({ message: error.message });
    }
  }
);
export const getStatistics = createAsyncThunk(
  "words/getStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/words/statistics");
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const addNewWord = createAsyncThunk(
  "words/addNewWord",
  async (newWordData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/words/create", newWordData);

      return data;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error("Such a word exists");
      }
      return rejectWithValue({ message: error.message });
    }
  }
);

export const getUserWords = createAsyncThunk(
  "words/getUserWords",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/words/own");
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const deleteWord = createAsyncThunk(
  "words/deleteWord",
  async (currentWordId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/words/delete/${currentWordId}`);
      toast.info("Words was successfully deleted");
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const editWord = createAsyncThunk(
  "words/editWord",
  async (currentWordId, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/words/delete/${currentWordId}`);
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);
