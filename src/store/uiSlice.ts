import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  searchQuery: string;
}

const initialState: UiState = {
  searchQuery: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = uiSlice.actions;
export default uiSlice.reducer;
