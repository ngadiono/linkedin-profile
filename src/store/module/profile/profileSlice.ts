import { createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  detail: any;
  loading: boolean;
  error: boolean;
}

const initialState: ProfileState = {
  detail: null,
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

    // Purpose demo only
    profileDetailUpdate: (state, action) => {
      state.detail = { ...state.detail, ...action.payload };
    },

    profileFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    reset: () => initialState,
  },
});

export const { profileLoading, profileDetail, profileFailure, reset, profileDetailUpdate } =
  profileSlice.actions;

export default profileSlice.reducer;
