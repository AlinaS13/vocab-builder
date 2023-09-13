import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { clearAuthHeader, setAuthHeader } from "../../api";
import axios from "axios";

export const registrationUser = createAsyncThunk(
  "auth/registrationUser",
  async ({ rejectWithValue, ...userData }) => {
    try {
      const {
        data: { name, email, token },
      } = await axios.post(`/users/signup`, userData);

      setAuthHeader(token);
      return { name, email, token };
    } catch (error) {
      if (error.response.status === 409) {
        toast.error("Such email already exists");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ rejectWithValue, ...userData }) => {
    try {
      const {
        data: { email, password, name, token },
      } = await axios.post(`/users/signin`, userData);

      setAuthHeader(token);
      return { email, password, name, token };
    } catch (error) {
      toast.failure("Incorect email or password");
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    try {
      setAuthHeader(token);
      const { data } = await axios.post(`/users/signout`, token);
      clearAuthHeader();
      toast.info("Bye! See you soon!");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }

  // try {
  //   await signOut(auth);
  //   toast.info("Bye! See you soon!");
  // } catch (error) {
  //   return thunkAPI.rejectWithValue(error.message);
  // }
);
