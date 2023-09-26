import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPublicationDB, getAllPublicationsDB } from "~firebace/firestore";

export const fetchPublications = createAsyncThunk(
  "publications/fetchAllPublications",
  async (token, thunkAPI) => {
    try {
      const fechedPublications = await getAllPublicationsDB(token);

      if (fechedPublications) {
        return fechedPublications;
      }
      return [];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPublication = createAsyncThunk(
  "publications/addPublication",
  async (publicationData, thunkAPI) => {
    try {
      const addResult = await addPublicationDB(publicationData);
      return addResult;
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
