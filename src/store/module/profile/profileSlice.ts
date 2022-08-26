import { createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  currentProfile: object;
}

const initialState: ProfileState = {
  currentProfile: {},
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    save: (state) => {},
  },
});

export const { save } = profileSlice.actions;

export default profileSlice.reducer;
