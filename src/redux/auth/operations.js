import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrentUser,
  loginDB,
  registerDB,
  updateUserProfile,
} from "~firebace/auth";
// const setAuthHeader = (token) => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = "";
// };

export const register = createAsyncThunk(
  "auth/register",
  async ({ login, userPhotoURL, email, password }, thunkAPI) => {
    try {
      const registerResult = await registerDB({ email, password });
      if (registerResult === "auth/email-already-in-use")
        throw new Error("This email has alredy been used!");

      await updateUserProfile({
        displayName: login,
        photoURL: userPhotoURL,
      });

      return getCurrentUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const loggedUserData = await loginDB(credentials);

      if (loggedUserData === "auth/invalid-login-credentials")
        throw new Error("Invalid email or password, maybe you were mistaken?");
      if (loggedUserData === "auth/invalid-email")
        throw new Error("Invalid email, maybe you were mistaken?");

      return loggedUserData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    // await axios.post("/users/logout");
    // clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;

    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue("Unable to fetch user");
    // }

    try {
      // setAuthHeader(persistedToken);
      // const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (update, thunkAPI) => {
    try {
      await updateUserProfile(update);

      return getCurrentUser();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
