import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

//i18n reducers
import i18nReducer from './i18n/i18nSlice';

//layout reducers
import landingReducer from './layout/landing/landingSlice';

//module reducers
import profileReducer from './module/profile/profileSlice';

//ui reducers
import dialogReducer from './ui/dialog/dialogSlice';

const persistConfig = {
  key: 'shfhshfhsfhuewriowhfjf',
  storage,
  whitelist: ['auth'],
};

const layoutReducer = combineReducers({
  landing: landingReducer,
});

const ModuleReducer = combineReducers({
  profile: profileReducer,
});

const UiReducer = combineReducers({
  dialog: dialogReducer,
});

// export function makeStore() {
//   return configureStore({
//     reducer: { i18n: i18nReducer, layout: layoutReducer, module: ModuleReducer, ui: UiReducer },
//   });
// }

const rootReducer = combineReducers({
  i18n: i18nReducer,
  layout: layoutReducer,
  module: ModuleReducer,
  ui: UiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

const persistor = persistStore(store);

export { store, persistor };
