import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register, updateUser } from "./operations";

const initialState = {
  user: { name: null, email: null, userPhoto: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, onAuthSuccess)
      .addCase(logIn.fulfilled, onAuthSuccess)
      .addCase(updateUser.fulfilled, onAuthSuccess)
      // .addCase(refreshUser.fulfilled, onAuthSuccess)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null, userPhoto: null };
        state.token = null;

        state.isLoggedIn = false;
      });
  },
});

function onAuthSuccess(state, action) {
  const { email, displayName, photoURL, uid } = action.payload;
  state.user = { name: displayName, email: email, userPhoto: photoURL };
  state.token = uid;
  state.isLoggedIn = true;
}

const authReducer = authSlice.reducer;

export const { changeFilter } = authSlice.actions;

export default authReducer;
