import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { instance } from "../../api";

export const getAllWords = createAsyncThunk(
  "words/getAllWords",
  async (
    { searchQuery, selectedCategory, isIrregular, page, perPage },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await instance.get("/words/all", {
        params: {
          keyword: searchQuery,
          category: selectedCategory,
          isIrregular,
          page,
          perPage,
        },
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
      const { data } = await instance.get("/words/categories");

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
      const { data } = await instance.get("/words/statistics");
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
      const { data } = await instance.post("/words/create", newWordData);

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
  async (
    { searchQuery, selectedCategory, isIrregular, page, perPage },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await instance.get("/words/own", {
        params: {
          keyword: searchQuery,
          category: selectedCategory,
          isIrregular,
          page,
          perPage,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addWordsById = createAsyncThunk(
  "words/addWordsById",
  async (currentWordId, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/words/add/${currentWordId}`);
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
      const { data } = await instance.delete(`/words/delete/${currentWordId}`);
      toast.success("Words was successfully deleted");
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const editWord = createAsyncThunk(
  "words/editWord",
  async (editWordData, { rejectWithValue }) => {
    try {
      const { data } = await instance.patch(
        `/words/edit/${editWordData.id}`,
        editWordData.data
      );
      return data;
    } catch (error) {
      return rejectWithValue({ message: error.message });
    }
  }
);

export const getTasks = createAsyncThunk(
  "words/getTasks",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/words/tasks");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addAnsvers = createAsyncThunk(
  "words/addAnsvers",
  async (userAnswers, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/words/answers", userAnswers);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
