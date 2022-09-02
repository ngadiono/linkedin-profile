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
    profileExperienceUpdate: (state, action) => {
      state.detail.experiences = [action.payload, ...state.detail.experiences];
    },

    profileFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    reset: () => initialState,
  },
});

export const {
  profileLoading,
  profileDetail,
  profileFailure,
  reset,
  profileDetailUpdate,
  profileExperienceUpdate,
} = profileSlice.actions;

export default profileSlice.reducer;
