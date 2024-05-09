import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSideBar: true,
    channelDetails: {},
    darkTheme: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    closeMenu: (state) => {
      state.showSideBar = false;
    },
    addChannelDetails: (state, action) => {
      state.channelDetails[action.payload.channelID] =
        action.payload.profilePic;
    },
    toggleDarkTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleMenu, closeMenu, addChannelDetails, toggleDarkTheme } =
  appSlice.actions;

export default appSlice.reducer;
