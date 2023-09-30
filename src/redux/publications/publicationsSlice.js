import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPublications,
  addPublication,
  resetPublications,
} from "./operations";

export const publicationsSlice = createSlice({
  name: "publications",
  initialState: {
    items: [],
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchPublications.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addPublication.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(resetPublications.fulfilled, (state, action) => {
        state.items = action.payload;
      });
  },
});

const publicationsReducer = publicationsSlice.reducer;
export default publicationsReducer;
