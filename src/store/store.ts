import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

//i18n reducers
import i18nReducer from './i18n/i18nSlice';

//layout reducers
import landingReducer from './layout/landing/landingSlice';

//module reducers
import profileReducer from './module/profile/profileSlice';

//ui reducers
import dialogReducer from './ui/dialog/dialogSlice';

const layoutReducer = combineReducers({
  landing: landingReducer,
});

const ModuleReducer = combineReducers({
  profile: profileReducer,
});

const UiReducer = combineReducers({
  dialog: dialogReducer,
});

export function makeStore() {
  return configureStore({
    reducer: { i18n: i18nReducer, layout: layoutReducer, module: ModuleReducer, ui: UiReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;
