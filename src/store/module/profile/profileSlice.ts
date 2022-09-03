import { createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  detail: any;
  edit: any;
  loading: boolean;
  error: boolean;
}

const initialState: ProfileState = {
  detail: null,
  edit: null,
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
    profileEdit: (state, action) => {
      state.loading = false;
      state.edit = action.payload;
    },

    // Purpose demo only
    profileDetailUpdate: (state, action) => {
      state.detail = { ...state.detail, ...action.payload };
    },
    profileAvatarUpdate: (state, action) => {
      state.detail.avatar = action.payload;
    },
    profileExperienceAdd: (state, action) => {
      state.detail.experiences = [action.payload, ...state.detail.experiences];
    },
    profileExperienceUpdate: (state, action) => {
      const newArr = state.detail.experiences.map((obj) => {
        if (obj.id === action.payload.id) {
          delete obj.temp;
          return { ...obj, ...action.payload };
        }
        return obj;
      });
      state.detail.experiences = newArr;
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
  profileEdit,
  profileFailure,
  reset,
  profileDetailUpdate,
  profileExperienceAdd,
  profileExperienceUpdate,
  profileAvatarUpdate,
} = profileSlice.actions;

export default profileSlice.reducer;
