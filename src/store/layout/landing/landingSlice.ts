import { createSlice } from '@reduxjs/toolkit';

export interface LandingState {
  sidebarOpen: boolean;
}

const initialState: LandingState = {
  sidebarOpen: false,
};

export const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    changeSidebar: (state) => {},
  },
});

export const { changeSidebar } = landingSlice.actions;

export default landingSlice.reducer;
