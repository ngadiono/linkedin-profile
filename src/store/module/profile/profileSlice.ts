import { createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  detail: object;
  loading: boolean;
  error: boolean;
}

const initialState: ProfileState = {
  detail: {},
  loading: false,
  error: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profileLoading: (state) => {
      state.loading = true;
    },
    profileDetail: (state, action) => {
      state.loading = false;
      state.detail = action.payload;
    },
    profileFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    reset: () => initialState,
  },
});

export const { profileLoading, profileDetail, profileFailure, reset } = profileSlice.actions;

export default profileSlice.reducer;
