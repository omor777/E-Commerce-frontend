import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:4000/api/v1";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/register`, formData);
      return data;
    } catch (e) {
      console.log(e, "thunk register");
      return rejectWithValue(e.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/login`, formData);
      return data;
    } catch (e) {
      console.log(e, "thunk login");
      return rejectWithValue(e.response.data.message);
    }
  }
);
