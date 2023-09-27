import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPublications,
  addPublication,
  resetPublications,
  //   deletePublication,
  //   editPublication,
} from "./operations";

export const publicationsSlice = createSlice({
  name: "publications",
  initialState: {
    items: [],
    // isLoading: false,
    // error: null,
  },

  extraReducers: (builder) => {
    builder
      // .addCase(fetchPublications.pending, handlePending)
      // .addCase(addPublication.pending, handlePending)
      // .addCase(fetchPublications.rejected, handleRejected)
      // .addCase(addPublication.rejected, handleRejected)
      .addCase(fetchPublications.fulfilled, (state, action) => {
        // state.isLoading = false;
        // state.error = null;
        state.items = action.payload;
      })
      .addCase(addPublication.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(resetPublications.fulfilled, (state, action) => {
        state.items = action.payload;
      });
    //     .addCase(editPublication.rejected, handleRejected)
    //     .addCase(deletePublication.pending, handlePending)
    //     .addCase(deletePublication.rejected, handleRejected)
    //   .addCase(deletePublication.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.error = null;

    //     const deletedContactIndex = state.items.findIndex(
    //       (contact) => contact.id === action.payload.id
    //     );
    //     state.items.splice(deletedContactIndex, 1);
    //   })
    //   .addCase(editPublication.fulfilled, (state, action) => {
    //     const patchedContactId = state.items.findIndex(
    //       (item) => item.id === action.payload.id
    //     );

    //     state.isLoading = false;
    //     state.error = null;
    //     state.items[patchedContactId] = action.payload;
    //   });
  },
});

function handlePending(state) {
  state.isLoading = true;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const publicationsReducer = publicationsSlice.reducer;
export default publicationsReducer;
