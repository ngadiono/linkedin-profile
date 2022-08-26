import { createSlice } from '@reduxjs/toolkit';

export interface DialogState {
  open: boolean;
}

const initialState: DialogState = {
  open: false,
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    dialogOpen: (state) => {},
  },
});

export const { dialogOpen } = dialogSlice.actions;

export default dialogSlice.reducer;
