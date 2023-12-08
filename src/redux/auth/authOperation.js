import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { clearAuthHeader, setAuthHeader } from "../../api";
import { instance } from "../../api";

export const registrationUser = createAsyncThunk(
  "auth/registration",
  async ({ rejectWithValue, ...userData }) => {
    try {
      const { data } = await instance.post("users/signup", userData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ rejectWithValue, ...userData }) => {
    try {
      const {
        data: { email, password, name, token },
      } = await instance.post("/users/signin", userData);

      setAuthHeader(token);
      return { email, password, name, token };
    } catch (error) {
      toast.error("Incorect email or password");
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = instance.post("/users/signout");
      clearAuthHeader();
      toast.info("Bye! See you soon!");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    if (!token) {
      return rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(token);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      if (error.response.status === 401) {
        clearAuthHeader();
        window.localStorage.clear();
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
