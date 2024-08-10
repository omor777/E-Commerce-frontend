import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authApi";

const initialState = {
  user: null,
  loading: "idle",
  error: null,
  token: null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = "succeeded";
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error?.message || "Failed to register";
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.user = action.payload?.data || null;
        state.token = action.payload?.token || null;
        state.message = action.payload?.message || null;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error?.message || "Failed to login";
      });
  },
});

export default authSlice.reducer;
