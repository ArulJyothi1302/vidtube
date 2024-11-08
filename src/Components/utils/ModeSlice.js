import { createSlice } from "@reduxjs/toolkit";

const ModeSlice = createSlice({
  name: "DarkMode",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleMode: (state, action) => {
      state.isDark = !state.isDark;
    },
  },
});
export const { toggleMode } = ModeSlice.actions;
export default ModeSlice.reducer;
