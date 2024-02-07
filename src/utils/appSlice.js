import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    showSideBar: true,
    channelDetails: {},
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
  },
});

export const { toggleMenu, closeMenu, addChannelDetails } = appSlice.actions;

export default appSlice.reducer;
