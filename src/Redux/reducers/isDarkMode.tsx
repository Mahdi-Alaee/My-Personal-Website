import { createSlice } from "@reduxjs/toolkit";

export const isDarkMode = createSlice({
  name: "isDarkMode",
  initialState: true,
  reducers: {
    changeTheme: (state) => {
      // state = !state;
      console.log(state);
      return !state;
    },
  },
});

export const { changeTheme } = isDarkMode.actions;
