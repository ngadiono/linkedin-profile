import { createSlice } from '@reduxjs/toolkit';

export interface I18nState {
  locales: string[];
  defaultLocale: string;
}

const initialState: I18nState = {
  locales: ['id-ID', 'en-EN'],
  defaultLocale: 'id-ID',
};

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    changeI18n: (state) => {},
  },
});

export const { changeI18n } = i18nSlice.actions;

export default i18nSlice.reducer;
