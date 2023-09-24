import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchPublications = createAsyncThunk(
  "publications/fetchAllPublications",
  async (_, thunkAPI) => {
    try {
      //   const { data } = await axios("/publications");
      //   return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPublication = createAsyncThunk(
  "publications/addPublication",
  async (contact, thunkAPI) => {
    try {
      //   const { data } = await axios.post("/publications", contact);
      //   return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const editPublication = createAsyncThunk(
//   "publications/editPublication",
//   async ({ name, number, id }, thunkAPI) => {
//     try {
//       const { data } = await axios.patch(`/publications/${id}`, { name, number });
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deletePublication = createAsyncThunk(
//   "publications/deletePublication",
//   async (publicationId, thunkAPI) => {
//     try {
//       const { data } = await axios.delete(`/publications/${publicationId}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
