import { createAsyncThunk } from "@reduxjs/toolkit";
import { addPublicationDB, getAllPublicationsDB } from "~firebace/firedatabase";

export const fetchPublications = createAsyncThunk(
  "publications/fetchAllPublications",
  async (userName, thunkAPI) => {
    try {
      const fechedPublications = await getAllPublicationsDB(userName);
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

export const resetPublications = createAsyncThunk(
  "publications/resetPublications",
  () => []
);
