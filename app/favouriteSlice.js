import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteIds: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    toggleFavouriteId: (state, action) => {
      const favouriteIndex = state.favouriteIds.findIndex(
        (id) => id === +action.payload
      );
      if (favouriteIndex !== -1) {
        state.favouriteIds.splice(favouriteIndex, 1);
      } else {
        state.favouriteIds.push(action.payload);
      }
    },
    filterFavouriteIds: (state, action) => {
      const productIds = action.payload.map((product) => product?.id);
      state.favouriteIds = state.favouriteIds.filter((id) =>
        productIds?.includes(id)
      );
    },
  },
});

export const { toggleFavouriteId, filterFavouriteIds } = favouriteSlice.actions;
export default favouriteSlice.reducer;
