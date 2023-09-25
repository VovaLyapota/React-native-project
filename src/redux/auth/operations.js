import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../../config";
import {
  getCurrentUser,
  loginDB,
  logoutDB,
  registerDB,
  updateUserProfile,
} from "~firebace/auth";

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
    await logoutDB();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

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

// export const refreshUser = createAsyncThunk(
//   "auth/refresh",
//   async (persistedToken, thunkAPI) => {
//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue("Unable to fetch user");
//     }

//     try {
//       const refreshedUser = auth.currentUser;
//       console.log("refreshedUser: ", refreshedUser);
//       console.log("auth: ", auth);
//       return refreshedUser;
//     } catch (error) {
//       console.log("error");
//       console.log(error.message);
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
